var request = require('request');
var key = require('./utils').key;


module.exports = {
	getWeather: function(query, callback){
		var queryStr = 'http://api.openweathermap.org/data/2.5/weather?lat=' + query.lat + '&lon=' + query.lon + '&APPID=' + key;

		request.get(queryStr, function(err, res, data) {
			if(err) console.log('ERROR in getData: ', err);

			data = JSON.parse(data);
			console.log('DATA from getData: ', data);

			callback(data);
		})
	},
	addStation: function(query){

	},
	updateStation: function(query){

	}
};