/**
 * Define Users Mongoose Model for The Users Collecion
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userID: Schema.Types.ObjectId,
	userName: String,
	password: String,
	firstName: String,
	lastName: String,
	email: {type: String, validate:{
		validator: function(email){
			return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
		},
		message: '{VALUE} is not a valid email'
	}},
	createdDate: {type: Date, default:Date.now},
	lassAccessDate: Date,
	active: Boolean,
	courses:[],
});
