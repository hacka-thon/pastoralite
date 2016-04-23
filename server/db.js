var Firebase = require('firebase');
var ref = new Firebase('https://vivid-fire-5392.firebaseio.com/pastoralist');
var alertsRef = ref.child('alerts');




module.exports = {
	newAlert: function(data){
		var uid = "" + data.lat + ',' + data.lon;

		alertsRef.child(uid)
			.push({
				alert: data.alert
			});
	},

	getAlerts: function(data, callback){
		console.log('in getAlerts DB');
		var uid = "" + data.lat + ',' + data.lon;

		alertsRef.once('value', function(snapshot){
			console.log('snapshot in getAlerts: ', snapshot.child(uid).val())
			data = snapshot.child(uid).val();

			callback(data);
		})

	}

}

