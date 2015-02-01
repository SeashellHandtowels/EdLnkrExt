'use strict';

angular.module('EdLnkr')

.controller('MainController', ["$scope", "$http", function($scope, $http) {
  $scope.plans = [];
  $scope.chosenPlan = "";
  var url = "http://localhost:9000/api/plans";
  $scope.addLink = function(event) {
    event.preventDefault();
    chrome.tabs.getSelected(function(data) {
      // TODO choose $.ajax or $http - determine which encoding is usable
      $http({
        url: url + "/" + $scope.chosenPlan._id,
        method: 'PATCH',
        data: {url: data.url, description: $scope.linkDescription}
        //headers: {'Content-Type': 'application/json'}
      })
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.error(arguments);
      });
    });
  };

  $http.get(url)
    .success(function(data) {
      $scope.plans = data;
    })
    .error(function(err) {
      console.log("There was an error:");
      console.error(err);
  });

}]);
