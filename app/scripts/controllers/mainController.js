'use strict';

angular.module('EdLnkr')

.controller('MainController', ["$scope", "$http", function($scope, $http) {
  $scope.plans = [];
  $scope.planId = "";
  $scope.addLink = function() {
    var selectedUrl;
    chrome.tabs.getSelected(function(data) {
      selectedUrl = data.url;
      console.log(selectedUrl);
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
