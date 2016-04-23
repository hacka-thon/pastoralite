var express = require('express');
var router = express.Router();
var api = require('./apiServices');


router.get('/info', function(req, res){
	//gets search info off req.query

	//calls func on api

	//returns data
})

router.get('/communication', function(req, res){
	//sends info based on location
})

router.post('/communication', function(req, res){
	//gets info and stores it in state
})


router.get('/alert', function(req, res){
	//gets search info off req.query

	//calls func on api

	//returns data
})

router.post('/alert', function(req, res){

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
