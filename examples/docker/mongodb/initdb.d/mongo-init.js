/* https://www.mongodb.com/docs/manual/reference/bson-types/ */

db.createUser({
  user: "admin",
  pwd: "admin1234",
  roles: [
    {
      role: "readWrite",
      db: "testdb",
    },
  ],
});

db = db.getSiblingDB("testdb");

db.createCollection("testcollection", {});
