const { Pool } = require('pg');
require('env2')('./config.env');

const dbUrl =
  process.env.ENV !== 'testing'
    ? process.env.DATABASE_URL
    : process.env.TESTING_DATABASE_URL;

const pool = new Pool({
  connectionString: dbUrl,
});

module.exports = pool;
