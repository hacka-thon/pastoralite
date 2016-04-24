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

    .controller('HomeCtrl', function HomeCtrl ($httpParamSerializer, HomeService) {

        var vm = this;
        vm.initialize = initialize;

        function initialize(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            console.log('curernt position', position);

            var params = {};
            params.lat = position.coords.latitude;
            params.long = position.coords.longitude;
            params.ts = position.timestamp;

            var qs = $httpParamSerializer(params);

            HomeService.getAlerts(qs, function(response){
                console.log('response', response);
            })
        }

    });