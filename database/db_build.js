const fs = require('fs');
const dbConnection = require('./db_connection');

const buildScript = fs.readFileSync('./database/db_build.sql', 'utf8');

dbConnection.query(buildScript, (error, result) => {
  if (error) throw error;
  console.log('database build successful');
  dbConnection.end();
});
