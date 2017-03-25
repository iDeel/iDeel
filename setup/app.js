var path = require('path');


//-------------------
// Express
var express = require('express');
var app = express();


//-------------------
// For parsing JSON object
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(bodyParser.urlencoded({extended: false}));


//-------------------
var cookieParser = require('cookie-parser');
app.use(cookieParser());


//-------------------
var favicon = require('serve-favicon');


//-------------------
var logger = require('morgan');
app.use(logger('dev'));


//-------------------
// Initialize app
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../')));
app.use(express.Router());

module.exports = app;