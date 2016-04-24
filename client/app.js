
$(document).ready(function(){
	// $('#GS').load('assets/views/gameswap.html');
	var _ = require('underscore');
	$('#get-alerts').click(function(){
		$.ajax({
			method: 'GET',
			url: '/alerts',
			success: function(result){
				console.log('--> result from alerts get: ', result);

				for(var item in result){
					console.log('--> result item: ', result[item]);

					var newAlert = $('<li>'+ result[item].alert+'</li>');
					$('#alerts').append(newAlert);
				}
			}
		});
	});

	$('#Liven').click(function(){
		var el = document.getElementById('LivenUp');
		el.scrollIntoView(false);
	});

	$('#get-messages').click(function(){
		$.ajax({
			method: 'GET',
			url: '/communication',
			success: function(result){
				console.log('result from messages', result);
				_.each(result, function(item){
					var newMessage = $('<li>' + result[item].message + '</li>');
					$('#message-display').append(newMessage);
				});
			}
		});
	});
});
