/**
 * Define Users Mongoose Model for The Users Collecion
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userID: {type: Schema.Types.ObjectId},
	userName: {type: String,required: true},
	password: {type: String,required: true},
	firstName: {type: String,required: true},
	lastName: {type: String,required: true},
	email: {type: String,required: true, validate:{
		validator: function(email){
			return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
		},
		message: '{VALUE} is not a valid email'
	}},
	createdDate: {type: Date, default:Date.now},
	lassAccessDate: Date,
	active: {type: Boolean, required: true, default: true},
	courses:[],
});
