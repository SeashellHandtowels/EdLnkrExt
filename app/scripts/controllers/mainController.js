'use strict';

angular.module('EdLnkr')

.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.plans = [];
  $scope.chosenPlan = '';
  // To test this extension with a local instance of EdLnkr, use the following url.
  //var url = 'http://localhost:9000/api/plans';
  var url = 'https://edlnkr.herokuapp.com/api/plans';
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
        window.close();
      })
      .error(function(data) {
        console.error(data);
        window.close();
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
