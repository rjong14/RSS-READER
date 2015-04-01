angular.module('App.controllers', [])
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.status = "It works!";
        $http.get("https://rssapi.herokuapp.com/").success(function (response) {
            $scope.data = response
        })
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }])
    .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
        $scope.lol = "topkek";
      $scope.toggleSidenav = function(menuId) {
          console.log("toggleshit")
    $mdSidenav(menuId).open();
       };
    }]);
