angular.module('myApp.HomeService', [])
.factory('HomeService', function HomeService ($http, $q){

    var API = {
        getAlerts: getAlerts, // Get multiple alerts
        postAlert: postAlert // Add single alert
    };

    return API;

    function getAlerts (qs) {
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: 'api/alert'
        }).success(function (response) {
            if(response.success) {
                defer.resolve(response);
            } else {
                defer.reject('Error getting alerts');
            }
            defer.reject('Error getting alerts');
        });

        return defer.promise;
    }

    function postAlert (message) {
        var defer = $q.defer();

        $http({
            method: 'POST',
            url: 'api/alert'
        }).success(function(response){
            if(response.success){
                defer.resolve(response);
            } else {
                defer.reject('Error posting alert');
            }
            defer.reject('Error posting alert');
        });

        return defer.promise;
    }

});