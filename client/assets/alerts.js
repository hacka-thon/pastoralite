$(document).ready(function(){
	$('#back').hide();
	console.log('--> helpers test: ', helpers);

	$('#get-alerts').click(function(){
		helpers.switchButtons();
		$('#alerts').show();
		
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
	})

});