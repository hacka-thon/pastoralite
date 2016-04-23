angular.module('myApp.communication', [])

  .config( function( $stateProvider) {
    $stateProvider.state('communication', {
      url: '/communication',
      templateUrl: 'components/home/communication.html',
      controller: 'communication'
    })
  })

  .controller('communication', function() {
  });