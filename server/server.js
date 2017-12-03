const express = require('express');
const bodyParser = require('body-parser');
const getAllCareers = require('../database/queries/get_all_careers');
const addCareer = require('../database/queries/add_career');
const likeCareer = require('../database/queries/like_career');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/api/careers', (request, response) => {
  getAllCareers((error, result) => {
    if (error) {
      response.send(
        '<h1>Sorry, there was a problem with the data Please try again!</h1>'
      );
    } else {
      response.send(result);
    }
  });
});

app.post('/api/career/like', (request, response) => {
  likeCareer(request.body, (error, result) => {
    console.log(request.body);
    if (error) {
      response.send(
        '<h1>Sorry, there was a problem with the data Please try again!</h1>'
      );
    } else {
      response.send(result);
    }
  });
});

app.get('/add-career', (request, response) => {
  response.sendFile('addCareer.html', { root: __dirname + '/../public/' });
});

app.post('/add-career', (request, response) => {
  addCareer(request.body, (err, res) => {
    if (err) {
      response.send(
        '<h1>Sorry, there was a problem submitting the form. Please try again!</h1>'
      );
    }
    response.redirect('/add-career');
  });
});

module.exports = app;
