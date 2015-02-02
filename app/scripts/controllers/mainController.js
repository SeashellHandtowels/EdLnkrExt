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
      var result = $scope.chosenPlan.links;
      result.push({url: data.url, description: $scope.linkDescription});
      $http({
        url: url + '/' + $scope.chosenPlan._id,
        method: 'PATCH',
        data: {links: result}
      })
      .success(function(data) {
        alert('Link saved');
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
