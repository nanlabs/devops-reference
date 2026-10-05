const fs = require('node:fs')
const http = require('node:http')
const { buildSchema, graphql } = require('graphql')
const { graphqlHandler } = require('../.build/src/resolvers/handler.js')

const schema = buildSchema(fs.readFileSync('schema.graphql', 'utf8'))
const rootValue = Object.fromEntries(
  ['getResource', 'getResources', 'createResource'].map((fieldName) => [
    fieldName,
    (args) => graphqlHandler({ arguments: args, info: { fieldName } }, {})
  ])
)

http
  .createServer(async (request, response) => {
    if (request.method !== 'POST' || request.url !== '/graphql') {
      response.writeHead(404).end('POST /graphql only')
      return
    }

    let body = ''
    for await (const chunk of request) body += chunk

    try {
      const { query, variables, operationName } = JSON.parse(body)
      const result = await graphql({
        schema,
        source: query,
        rootValue,
        variableValues: variables,
        operationName
      })
      response.writeHead(200, { 'content-type': 'application/json' })
      response.end(JSON.stringify(result))
    } catch (error) {
      response.writeHead(400, { 'content-type': 'application/json' })
      response.end(JSON.stringify({ errors: [{ message: error.message }] }))
    }
  })
  .listen(20002, '127.0.0.1', () => {
    console.log(
      'Local GraphQL handler server listening at http://127.0.0.1:20002/graphql'
    )
    console.log(
      'This runs the schema and Lambda handler; it does not emulate AppSync, VTL, or auth.'
    )
  })
