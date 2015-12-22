var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup', {
	date: 	{ type: String },
	title: 	{ type: String }	
});