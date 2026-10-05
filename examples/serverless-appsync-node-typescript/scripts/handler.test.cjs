const assert = require('node:assert/strict')
const test = require('node:test')
const { graphqlHandler } = require('../.build/src/resolvers/handler.js')

test('getResource resolves an AppSync field', async () => {
  const result = await graphqlHandler(
    { arguments: { id: '7' }, info: { fieldName: 'getResource' } },
    {}
  )
  assert.deepEqual(result, { id: '7', name: 'Resource 7' })
})

test("createResource reads the schema's data input", async () => {
  const result = await graphqlHandler(
    {
      arguments: { data: { name: 'Created' } },
      info: { fieldName: 'createResource' }
    },
    {}
  )
  assert.deepEqual(result, { id: '1', name: 'Created' })
})

test('unknown AppSync fields are rejected', async () => {
  await assert.rejects(
    graphqlHandler({ arguments: {}, info: { fieldName: 'missing' } }, {}),
    /Unsupported operation missing/
  )
})
