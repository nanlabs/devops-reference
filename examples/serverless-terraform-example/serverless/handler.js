const mysql = require("serverless-mysql")({
  config: {
    host: process.env.DATABASE_ENDPOINT,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  }
});

exports.handle = async (event, context) => {
  if (!event.queryStringParameters.name) {
    return {
      statusCode: 200,
      body: "Please provide name query param!"
    };
  }

  await mysql.query(`
  CREATE TABLE IF NOT EXISTS things (
    id int(11) NOT NULL AUTO_INCREMENT,
    name text NOT NULL,
    PRIMARY KEY (id)
  )`);

  await mysql.query(
    `INSERT INTO things (name) VALUES ('${event.queryStringParameters.name}')`
  );
  const results = await mysql.query(`SELECT * FROM things`);
  await mysql.end();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
    <html>
      <style>
      table, tr, th {
        border: 1px black solid;
      }
      </style>
      <body>
        <h1>Row inserted: ${event.queryStringParameters.name}</h1>
        Items:
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th> 
          </tr>
          ${results.map(
            item =>
              `<tr>
              <th>${item.id}</th>
              <th>${item.name}</th>
            </tr>`
          )}
        </table>
      </body>
    </html>
    `
  };
};
