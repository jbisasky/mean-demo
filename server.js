var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express(),
	meetupCtrl = require('./server/meetupCtrl');

mongoose.connect('mongodb://localhost:27017/mean-demo');
app.use(express.static(__dirname + '/app'));
app.use(bodyParser());

// when someone makes a request to root ('/'), we will respond with index.html
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/app/index.html');
});

//REST API
app.get('/api/meetups', meetupCtrl.list);
app.post('/api/meetups', meetupCtrl.create);

app.listen(3000, function() {
	console.log('I\'m Listening...');
})