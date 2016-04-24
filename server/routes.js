var express = require('express');
var router = express.Router();
var parse = require('query-string').parse;
var api = require('./apiServices');
var db = require('./db');

router.get('/info', function(req, res){
	var location = parse(req.url);
	console.log('parsed url: ', location);

	location = {
		lat: 14,
		lon: 118.1445
	};

	api.getWeather(location, function(data){
		res.send(data);
	})

})

router.get('/communication', function(req, res){
	var location = {
		lat: 72,
		lon: 97
	}

	db.getMessages(location, function(data){
		res.json(data);
	})
})

router.post('/communication', function(req, res){
	var message = {
		lat: 27,
		lon: 97,
		message: "How's it going out there?"
	}

	db.postMessage(message, function(){
		res.sendStatus(200);
	})
})


router.get('/alert', function(req, res){
	var location = {
		lat: 92,
		lon: 124
	}

	db.getAlerts(location, function(data){
		res.send(data);
	});
})

router.post('/alert', function(req, res){
	var alert = {
		lat: 92,
		lon: 124,
		alert: "Oh n/m, all good."
	}

	db.postAlert(alert);
	res.sendStatus(200);
})


router.post('/mystation', function(req, res){
	//gets search info off req.body

	//calls func on api -> sending data

	//returns data
})
	
router.put('/mystation', function(req, res){
	//gets new info off req.body

	//calls func on api -> sending data

})

module.exports = router;