
$(document).ready(function(){
	// $('#GS').load('assets/views/gameswap.html');

	$('#get-alerts').click(function(){
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
	});

	$('#Liven').click(function(){
		var el = document.getElementById('LivenUp')
		el.scrollIntoView(false);
	});

});