$(document).ready(function(){
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
