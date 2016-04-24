var request = require('request');
var key = require('./utils').key;


module.exports = {
	getWeather: function(query, callback){
		var queryStr = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + query.lat + '&lon=' + query.lon + '&APPID=' + key;

		request.get(queryStr, function(err, res, data) {
			if(err) console.log('ERROR in getData: ', err);

			data = JSON.parse(data);
			data = data.list;

			var dataArr = [];

			for(var i=0 ; i<data.length ; i+=8){
				var temp = {
					day: data[i+3],
					night: data[i+7]
				}

				dataArr.push(temp);
			}

			console.log('formated data: ', dataArr)

			callback(dataArr);
		})
	},
	addStation: function(query){

	},
	updateStation: function(query){

	}
};