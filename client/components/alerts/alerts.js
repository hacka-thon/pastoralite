angular.module('myApp.alerts', [])

  .config( function( $stateProvider) {
    $stateProvider.state('alerts', {
      url: '/alerts',
      templateUrl: 'components/alerts/alerts.html',
      controller: 'alerts'
    })
  })

  .controller('alerts', function() {
  });