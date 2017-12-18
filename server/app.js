const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');

require('env2')('./config.env');

const controllers = require('./controllers/index');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  require('express-session')({
    secret: 'HI',
    resave: true,
    saveUninitialized: true,
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  })
);

app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(controllers);

module.exports = app;