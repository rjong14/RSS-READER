(function () {
    var app = angular.module('rssReader', [])

    .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.headers.common = 'Content-Type: application/json';
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])


        app.controller('motdController', function ($scope, $http) {
        $http.get("https://rssapi.herokuapp.com/").success(function (response) {
            $scope.data = response
        })
    });





})();
