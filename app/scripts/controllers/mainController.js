'use strict';

angular.module('EdLnkr')

.controller('MainController', ["$scope", "$http", function($scope, $http) {
  $scope.plans = [];
  $scope.planId = "";
  $scope.addLink = function() {
    chrome.tabs.getSelected(function(data) {
      $scope.planId.links.push(data.url);
      $http.put('https://edlnkr.herokuapp.com/api/plans/' + $scope.planId._id, $scope.planId)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.error(arguments);
        });
    });
  };

  $http.get('https://edlnkr.herokuapp.com/api/plans')
    .success(function(data) {
      $scope.plans = data;
    })
    .error(function(err) {
      console.log("There was an error:");
      console.log(err);
  });

}]);
