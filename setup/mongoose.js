//-------------------
// Database
var mongoose = require('mongoose');
var mongoDBConnection = require('./../LocalMongoDBConnectingString.config');
mongoose.connect(mongoDBConnection.uri);


// Schema
var user;

mongoose.connection.on('open', function () {
	var Schema = mongoose.Schema;

	var userSchema = new Schema(
		{
			givenName: String,
			familyName: String,
			email: String,
			profilePhotoUrl: String
		},
		{ collection: 'users' }
	);
	user = mongoose.model('user', userSchema);

	console.log('models have been created');
});

module.exports.mongoose = mongoose;
module.exports.user = user;
