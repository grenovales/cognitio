/**
 * Define Users Mongoose Model for The Users Collecion
 */
var mongoose = require('mongoose')
	,Schema = mongoose.Schema
    ,model = module.exports;

var userSchema = new Schema({
	userID: {type: Schema.Types.ObjectId},
	userEmail: {type: String,required: true, validate:{
		validator: function(email){
			return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
		},
		message: '{VALUE} is not a valid email'
	}},	
	password: {type: String,required: true},
	firstName: {type: String,required: true},
	lastName: {type: String,required: true},
	createdDate: {type: Date, default:Date.now},
	lastAccessDate: Date,
	isActive: {type: Boolean, required: true, default: true},
	courses:[],
});

model.save = function(userBag){
    var Users = mongoose.model('users', userSchema);
    Users.collection.insert(userBag, function(error,docs){
        if (err) {
            console.error(err);
        } else {
            console.info('%d users were successfully stored.', docs.length);
        }
    });
};

model.find = function(query){
	 var Users = mongoose.model('users', userSchema);
	 Users.find(query,function(err,docs){
		if(err) console.error(err);
		 return docs;
	 });
};