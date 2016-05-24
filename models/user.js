var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	created_at: Date,
	updated_at: Date
});

userSchema.pre('save', function(next) {
	var currentDate = new Date();

	this.updated_at = currentDate;

	if (!this.created_at) {
		this.created_at = currentDate;
	}

	next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;
