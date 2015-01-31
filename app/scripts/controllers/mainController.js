'use strict';

angular.module('EdLnkr')

.controller('MainController', ["$scope", "$http", function($scope, $http) {
  $scope.plans = [];
  $http.get('https://edlnkr.herokuapp.com/api/plans')
    .success(function(data) {
      debugger;
      $scope.plans = data;
    })
    .error(function(err) {
      debugger;
      console.log("hello");
  });

}]);
