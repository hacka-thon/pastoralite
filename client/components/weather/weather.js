angular.module('myApp.weather', [])

  .config( function( $stateProvider) {
    $stateProvider.state('weather', {
      url: '/weather',
      templateUrl: 'components/weather/weather.html',
      controller: 'weather'
    })
  })

  .controller('weather', function() {
  });