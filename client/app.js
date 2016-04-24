angular.module('myApp', [
  'ngResource',
  'ngMessages',
  'ngMaterial',
  'ui.router',
  'satellizer',
  'myApp.navbar',
  'myApp.alerts',
  'myApp.communication',
  'myApp.home',
  'myApp.weather'
])

  .config(function($stateProvider, $mdThemingProvider, $urlRouterProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('grey');

    $urlRouterProvider.otherwise('/home');

  });
