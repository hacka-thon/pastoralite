$(document).ready(function(){

	$('#get-weather').click(function(){
		console.log('--> in weather on click');

		helpers.switchButtons();
		$('#weather').show();

		var data = {
			lat: state.lat,
			lon: state.lon,
		}

		data = JSON.stringify(data);
		
		$.ajax({
			type: 'GET',
			url: '/weather',
			contentType: 'application/json',
			data: data,
			success: function(result){
				console.log('--> result from weather get: ', result)

				for(var item in result){
					var curr = result[item];

					console.log('--> curr alert: ', curr.alert);

					var newAlert = $('<li><img src=' + curr.alert + ' class="col-xs-1 alerts"> lat: ' + curr.lat + ' lon: ' + curr.lon + '</li>');

					$('#alert-list').append(newAlert);	
				}
			}
		})

	})

})