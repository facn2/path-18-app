const addCareerDb = require('../../database/queries/add_career');

const addCareerController = (request, response) => {
  response.render('addCareer');
};

const addCareer = (request, response) => {
  addCareerDb(request.body, (err, res) => {
    if (err) {
      response.send(
        '<h1>Sorry, there was a problem submitting the form. Please try again!</h1>'
      );
    }
    response.redirect('/');
  });
};

module.exports = {
  addCareerController,
  addCareer,
};
