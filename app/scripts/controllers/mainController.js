'use strict';

angular.module('EdLnkr')

.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.plans = [];
  $scope.chosenPlan = '';
  var url = 'http://localhost:9000/api/plans';
  // var url = 'https://edlnkr.herokuapp.com/api/plans';
  $scope.addLink = function(event) {
    event.preventDefault();
    chrome.tabs.getSelected(function(data) {
      $scope.chosenPlan.links.push({url: data.url, description: $scope.linkDescription});
      $http({
        url: url + '/' + $scope.chosenPlan._id,
        method: 'PATCH',
        data: $scope.chosenPlan
      })
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.error(data);
      });
    });
  };

  $http.get(url)
    .success(function(data) {
      $scope.plans = data;
    })
    .error(function(err) {
      console.log('There was an error:');
      console.error(err);
    });

}]);
