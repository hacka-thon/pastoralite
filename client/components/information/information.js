angular.module('myApp.information', [])

  .config( function( $stateProvider) {
    $stateProvider
    .state('information', {
        url: '/information',
        templateUrl: 'components/information/information.html',
        controller: 'components/information/information.js'
    })
  })

  .controller('information', function() {
  });