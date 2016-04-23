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
      // get lat long from browser or from user
      // pass lat long to node using API and Get
      //
  });