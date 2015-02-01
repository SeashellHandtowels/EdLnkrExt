'use strict';

angular.module('EdLnkr')

.controller('MainController', ["$scope", "$http", function($scope, $http) {
  $scope.plans = [];
  $scope.planId = "";
  var url = "http://localhost:9000/api/plans";
  $scope.addLink = function(event) {
    event.preventDefault();
    chrome.tabs.getSelected(function(data) {
      var newPlan = {};
      newPlan.links = [{url: data.url, description: "hasdkl;"}, {url: "http://www.google.com", description: "asdf"}];
      newPlan.title = ";khladgs";
      newPlan._id = "54c976c39590686c18722a39";
      $.ajax({
        url: url + "/" + newPlan._id,
        method: 'PATCH',
        data: JSON.stringify(newPlan)
        //headers: {'Content-Type': 'application/json'}
      })
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log(arguments);
      });
    });
  };

  $http.get(url)
    .success(function(data) {
      $scope.plans = data;
      console.log(data);
    })
    .error(function(err) {
      console.log("There was an error:");
      console.log(err);
  });

}]);
