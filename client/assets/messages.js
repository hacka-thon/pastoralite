$(document).ready(function(){

  $('#get-messages').click(function(){
    helpers.switchButtons();
    $('#messages').show();
    $.ajax({
      type: 'GET',
      url: '/messages',
      success: function(result){
        console.log('--> result from messeges get: ', result);

        for(var item in result){
          var curr = result[item];

          console.log('--> curr message: ', curr.alert);

          var newMessage = $('<li> message: ' + curr.message +  '</li>');

          $('#message-list').append(newMessage);
        }
      }
    });
  });

	$('.send-message').click(function(e){
		var data = {
			lat: state.lat,
			lon: state.lon,
			time: $.now(),
			message: e.target.currentSrc
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
