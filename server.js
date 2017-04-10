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

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

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


//------------------//
//---- Rest API ----//
//------------------//

//-------------------
// Get
app.get('/user', function(req, res){
	console.log("Called: ");
});

//-------------------
// Post
app.post('/user', jsonParser, function (req, res) {
	console.log("Called:");
	res.redirect('/');
})

console.log("Now Waiting");

var port;
if (process.env.port)
	port = process.env.port;
else
	port = 80;

app.listen(port);