$(document).ready(function(){
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(helpers.showPosition);
    } 

})

var helpers = {
	// getLocation: function(callback) {
	// 	console.log('running get location');
	//     if (navigator.geolocation) {
	//         navigator.geolocation.getCurrentPosition(this.showPosition);
	//     } else {
	//         console.error('location is not supported')
	//     }
	// },

	showPosition: function(position) {
    	state.lat = position.coords.latitude;
    	state.lon = position.coords.longitude;

    	console.log('you are curently at: ', state.lat, state.lon)
	}
}

var state = {
	lat: 'default',
	lon: 'default'
}