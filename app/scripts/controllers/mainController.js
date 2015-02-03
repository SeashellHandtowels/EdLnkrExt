'use strict';

angular.module('EdLnkr')

.controller('MainController', ['$scope', '$http', function($scope, $http) {
  // To test this extension with a local instance of EdLnkr, use the following url.
  //var url = 'http://localhost:9000/api/plans';
  var url = 'https://edlnkr.herokuapp.com/api/plans';
  var method = 'PATCH';
  $scope.plans = [];
  $scope.chosenPlan = '';

  $scope.addLink = function(event) {
    event.preventDefault();
    chrome.tabs.getSelected(function(data) {
      if (!$scope.chosenPlan) {
        $scope.chosenPlan = {
          title: $scope.newPlan,
          synopsis: $scope.newSynopsis,
          links: []
        };
        method = 'POST';
      } else {
        url += '/' + $scope.chosenPlan._id;
      }
      $scope.chosenPlan.links.push({url: data.url, description: $scope.linkDescription});
      $http({
        url: url,
        method: method,
        data: $scope.chosenPlan
      })
      .success(function(response) {
        window.close();
        var message = 'The link, ' + data.url + ', was successfully saved to the plan, ' + $scope.chosenPlan.title + '.';
        chrome.notifications.create('msg', {type: 'basic', title: 'Success!', message: message, iconUrl: 'images/icon-38.png'}, function() {
          console.log(arguments);
        });
      })
      .error(function(data) {
        console.error(data);
        window.close();
        chrome.notifications.create('err', {type: 'basic', title: 'Error!', message: 'Uh-oh.  Something went wrong.', iconUrl: 'images/icon-38.png'}, function() {
          console.log(arguments);
        });
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
