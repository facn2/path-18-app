const express = require('express');
const bodyParser = require('body-parser');
const getAllCareers = require('../database/queries/get_all_careers');
const addCareer = require('../database/queries/add_career');
const getLikedCareers = require('../database/queries/get_liked_careers');
const likeCareer = require('../database/queries/like_career');
const unlikeCareer = require('../database/queries/unlike_career');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/api/careers', (request, response) => {
  const userId = 1;
  getAllCareers(userId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
  });
});

app.get('/api/careers/liked', (request, response) => {
  const userId = 1;
  getLikedCareers(userId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
  });
});

app.post('/api/career/like', (request, response) => {
  const userId = 1;
  const careerId = request.body.career_id;
  likeCareer(userId, careerId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
  });
});

app.delete('/api/career/like/:id', (request, response) => {
  const userId = 1;
  const careerId = request.params.id;
  unlikeCareer(userId, careerId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
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

app.get('/public/addcareer.css', (request, response) => {
  response.sendFile('addcareer.css', { root: __dirname + '/../public/' });
});

module.exports = app;
