angular.module('myApp.home', [])

  .config( function( $stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'components/home/communication.html',
      controller: 'HomeController'
    })
  })

  .controller('HomeController', function() {
  });