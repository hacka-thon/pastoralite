$(document).ready(function(){
	$('#back').hide();
	console.log('--> helpers test: ', helpers);

	$('#get-alerts').click(function(){
		helpers.switchButtons();
		$('#alerts').show();

		$.ajax({
			type: 'GET',
			url: '/alerts',
			success: function(result){
				console.log('--> result from alerts get: ', result);

				for(var item in result){
					var curr = result[item];

					console.log('--> curr alert: ', curr.alert);

					var newAlert = $('<li class="col-xs-18 alert-item"><img src=' + curr.alert + ' > lat: ' + curr.lat + ' lon: ' + curr.lon + '</li>');

					$('#alert-list').append(newAlert);
				}
			}
		});

	});

	$('.send-alerts').click(function(e){
		var data = {
			lat: state.lat,
			lon: state.lon,
			time: $.now(),
			alert: e.target.currentSrc
		};

		data = JSON.stringify(data);

		$.ajax({
			type: 'POST',
			url: '/alerts',
			contentType: 'application/json',
			data: data,
			success: function(){
				console.log('--> alert sent <--');
			}
		});
	});

});
