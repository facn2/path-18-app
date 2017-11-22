const express = require('express');
const getAllCareers = require('../database/queries/get_all_careers');

const app = express();

app.get('/api/careers', (request, response) => {
  getAllCareers((error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.send(result);
    }
  });
});

module.exports = app;
