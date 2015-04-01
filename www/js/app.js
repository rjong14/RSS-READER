angular.module('App', ['ngMaterial', 'ngRoute', 'App.services', 'App.controllers' ])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($httpProvider, $routeProvider) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.headers.common = 'Content-Type: application/json';
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
//        $routeProvider
//        .when('/', {
//            controller: 'MainCtrl',
//            templateUrl: 'partials/main.html'
//        })
//        .when('/view', {
//            controller: 'ViewCtrl',
//            templateUrl: 'partials/view.html'
//        })
//        .otherwise({redirectTo: '/'});
    });
