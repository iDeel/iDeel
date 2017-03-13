// Express
var express = require('express');
var app = express();

// For parsing JSON object
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// Database
var mongoose = require('mongoose');
var mongoDBConnection = require('./LocalMongoDBConnectingString.config');

// Single-sign On
// -- Google --
var passport = require('passport');
var googleStrategy = require('passport-google-oauth');

// Persistent login
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var mongoStore = require('connect-mongo')({ session: expressSession });

//Others
var http = require('http');
var https = require('https');
var url = require('url');
var morgan = require('morgan');
var logger = require('morgan');
var util = require('util');
var methodOverride = require('method-override');
var favicon = require('serve-favicon');
var path = require('path');
var index = require('./routes/index');
var users = require('./routes/users');


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

var port;
if (process.env.port)
    port = process.env.port;
else
    port = 80;

app.listen(port);

module.exports = app;
