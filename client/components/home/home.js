angular.module('myApp.home', [])

  .config( function( $stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html',
      controller: 'HomeCtrl'
    })
  })
  // get directional information from user (which direction are they going)
  // pass this to backend as query string

  .controller('HomeCtrl', function HomeCtrl () {

      var vm = this;
      vm.showEntry = showEntry;
      vm.entry = '';

      function initialize(){
          console.log('HERE')
          // get current lat long from browser
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              console.log("Geolocation is not supported by this browser.");
          }
      }

      function showPosition(position) {
          console.log('curernt position', position);
      }

      function showEntry (data){
          console.log('data', data);
      }

  });