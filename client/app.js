$(document).ready(function(){
	helpers.hideViews();

	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(helpers.showPosition);
    }

    $('#back').click(function(){
    	helpers.switchButtons();
    	helpers.hideViews();
    });

});

var helpers = {
	hideViews: function(){
	  $('#messages').hide();
		$('#weather').hide();
		$('#alerts').hide();

	},

	switchButtons: function(){
		$('#get-messages').toggle();
		$('#get-weather').toggle();
		$('#get-alerts').toggle();
		$('#back').toggle();
	},

	showPosition: function(position) {
    	state.lat = position.coords.latitude;
    	state.lon = position.coords.longitude;

    	console.log('you are curently at: ', state.lat, state.lon);
	}

};

var state = {
	lat: 'default',
	lon: 'default'
};
