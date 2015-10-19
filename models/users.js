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
	email: String,
	createdDate: {type: Date, default:Date.now},
	lassAccessDate: Date,
	active: Boolean,
	courses:[],
});
