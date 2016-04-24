var express = require('express');
var router = express.Router();
var parse = require('query-string').parse;
var api = require('./apiServices');
var db = require('./db');


router.get('/messages', function(req, res){

	db.getMessages(function(data){
		res.send(data);
	});
});

router.post('/messages', function(req, res){
	console.log('--> req.body messages: ', req.body);

	db.postMessage(req.body);
	res.sendStatus(200);
});

router.get('/alerts', function(req, res){

	db.getAlerts(function(data){
		res.send(data);
	});
});

router.post('/alerts', function(req, res){
	console.log('--> req.body alerts: ', req.body);
	db.postAlert(req.body);
	res.sendStatus(200);
});

router.get('/weather', function(req, res){
	// var checkFormat = JSON.parse(req.query);
	console.log('--> req query in weather: ', req.query);

	api.getWeather(req.body, function(data){
		res.send(data);
	});

});

// router.post('/mystation', function(req, res){
// 	//gets search info off req.body

// 	//calls func on api -> sending data

// 	//returns data
// });

// router.put('/mystation', function(req, res){
// 	//gets new info off req.body

// 	//calls func on api -> sending data

// });

module.exports = router;
