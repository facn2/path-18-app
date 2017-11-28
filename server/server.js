const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('../database/db_connection');
const getAllCareers = require('../database/queries/get_all_careers');
const addCareer = require('../database/queries/add_career');

const app = express();
app.use(bodyParser.json());

app.get('/api/careers', (request, response) => {
  getAllCareers((error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.send(result);
    }
  });
});

app.post('/sendCareer', (request, response) => {
  const careerData = request.body;
  addCareer(careerData, (err, res) => {
    if (err) {
      response.writeHead(404);
      response.end('error');
    } else {
      response.writeHead(200);
      response.end('done');
    }
  });
});

module.exports = app;
