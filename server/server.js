const express = require('express');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const dbConnection = require('../database/db_connection');
const getAllCareers = require('../database/queries/get_all_careers');
const addCareer = require('../database/queries/add_career');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/api/careers', (request, response) => {
  getAllCareers((error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.send(result);
    }
  });
});

app.get('/add-career', (request, response) => {
  response.sendFile('form.html', { root: __dirname + '/../public/' });
});

app.post('/send-career', (request, response) => {
  addCareer(request.body, (err, res) => {
    if (err) {
      console.log(err);
    }
    response.redirect('/thanks');
  });
});

module.exports = app;
