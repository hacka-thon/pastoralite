var _ = require('underscore');
var Firebase = require('firebase');
var ref = new Firebase('https://vivid-fire-5392.firebaseio.com/pastoralist');
var alertsRef = ref.child('alerts');
var messagesRef = ref.child('messages');



module.exports = {
	getAlerts: function(data, callback){

		alertsRef.once('value', function(snapshot){
			var response = snapshot.val();
			// helpers.directionFilter(response, data.direction, data.lat, data.lon);

			callback(response);
		});

	},

	postAlert: function(data){
		alertsRef.push({
				alert: data.alert,
				time: data.time,
				lat: data.lat,
				lon: data.lon
			});
	},

	getMessages: function(data, callback){
		var uid = "" + data.lat + ',' + data.lon;

		 messagesRef.once('value', function(snapshot){
		 	var response = snapshot.child(uid).val();
		 	callback(response);
		});
	},

	postMessage: function(data){
		var uid = "" + data.lat + ',' + data.lon;

		messagesRef.child(uid).push({
			messge: data.message,
			time: data.time
		});
	}

};

var helpers = {
	directionFilter: function(queryResult, direction, lat, lon){
		var result;

		if(direction === 0){
			result = _.filter(queryResult, function(item){
				if(item.lat > lat && (lon-1) < item.lon < (lon+1)) return true;
			});
		}

		if(direction === 1){
			result = _.filter(queryResult, function(item){
				if(item.lat>lat && item.on>lon) return true;
			});
		}

		if(direction === 2){
			result = _.filter(queryResult, function(item){
				if(item.lon > lon && (lat-1) < item.lat < (lat+1)) return true;
			});
		}

		if(direction === 3){
			result = _.filter(queryResult, function(item){
				if(item.lat<lat && item.on>lon) return true;
			});
		}

		if(direction === 4){

		}
	}
};
