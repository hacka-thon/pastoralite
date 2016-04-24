var Firebase = require('firebase');
var ref = new Firebase('https://vivid-fire-5392.firebaseio.com/pastoralist');
var alertsRef = ref.child('alerts');
var messagesRef = ref.child('messages');



module.exports = {
	getAlerts: function(data, callback){
		var uid = "" + data.lat + ',' + data.lon;

		alertsRef.once('value', function(snapshot){
			var response = snapshot.child(uid).val();
			callback(response);
		})

	},

	postAlert: function(data){
		var uid = "" + data.lat + ',' + data.lon;

		alertsRef.child(uid).push({
				alert: data.alert,
				time: data.time
			});
	},

	getMessages: function(data, callback){
		var uid = "" + data.lat + ',' + data.lon;

		 messagesRef.once('value', function(snapshot){
		 	var response = snapshot.child(uid).val();
		 	callback(response);
		 })
	},

	postMessage: function(data){
		var uid = "" + data.lat + ',' + data.lon;

		messagesRef.child(uid).push({
			messge: data.message,
			time: data.time
		})
	}

}

