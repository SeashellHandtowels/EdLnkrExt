'use strict';

angular.module('EdLnkr')

.controller('MainController', ["$scope", "$http", function($scope, $http) {
  $scope.plans = [];
  $scope.planId = "";
  $scope.addLink = function() {
    chrome.tabs.getSelected(function(data) {
      $scope.planId.links.push({url: data.url});
      //$http({
      //  url: 'https://edlnkr.herokuapp.com/api/plans/' + $scope.planId._id,
      //  method: 'PUT',
      //  data: $scope.planId,
      //  headers: {'Content-Type': 'application/json'}
      //})
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
