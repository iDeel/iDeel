//-------------------
// Main
var app = require('./setup/app');
var mongoose = require('./setup/mongoose');

//-------------------
//Others
var http = require('http');
var https = require('https');
var url = require('url');
var util = require('util');
var methodOverride = require('method-override');


//-------------------
// Single-sign On
var passport = require('passport');
// -- Google --
var googleStrategy = require('passport-google-oauth').Strategy;
// -- Facebook --
var facebookStrategy = require('passport-facebook').Strategy;


//-------------------
// Persistent login
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});

// app.use(expressSession({
//     secret: 'asianTrio',
//     cookie: {maxAge: 86400},
//     store: new mongoStore({
//         mongooseConnection: mongoose.connection,
//         collection: 'session',
//         ttl: 86400
//     }),
//     resave: true,
//     saveUninitialized: true
// }));

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

console.log("Now Waiting");

var port;
if (process.env.port)
	port = process.env.port;
else
	port = 80;

app.listen(port);