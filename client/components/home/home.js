angular.module('myApp.home', [])

  .config( function( $stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html',
      controller: 'home'
    })
  })

  .controller('home', function() {
  });