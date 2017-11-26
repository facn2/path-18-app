const express = require('express');
const bodyParser = require('body-parser');
const getAllCareers = require('../database/queries/get_all_careers');

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
  response.status(200).send('all good');
});

module.exports = app;
