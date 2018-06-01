const pgp = require("pg-promise")();

const connection = {
  host: "localhost",
  post: 5432,
  database: "liquor_app"
};

const db = pgp(connection);

module.exports = db;

