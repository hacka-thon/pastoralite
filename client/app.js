$(document).ready(function(){
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(helpers.showPosition);
    } 

    $('#back').click(function(){
    	helpers.switchButtons();
    	$('#messages').toggle();
		$('#weather').toggle();
		$('#alerts').toggle();
    })

})

var helpers = {
	switchButtons: function(){
		$('#get-messages').toggle();
		$('#get-weather').toggle();
		$('#get-alerts').toggle();
		$('#back').toggle();
	},

	showPosition: function(position) {
    	state.lat = position.coords.latitude;
    	state.lon = position.coords.longitude;

    	console.log('you are curently at: ', state.lat, state.lon)
	},

	getAlerts: function(){
		$.ajax({
			method: 'GET',
			url: '/alerts',
			success: function(result){
				console.log('--> result from alerts get: ', result)

				for(var item in result){
					console.log('--> result item: ', result[item]);

					var newAlert = $('<li>'+ result[item].alert+'</li>');
					$('#alerts').append(newAlert);	
				}
			}
		})
	}

}

var state = {
	lat: 'default',
	lon: 'default'
}