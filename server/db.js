const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "bq6489zh",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
