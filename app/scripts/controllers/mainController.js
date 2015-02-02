'use strict';

angular.module('EdLnkr')

.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.plans = [];
  $scope.chosenPlan = '';
  // To test this extension with a local instance of EdLnkr, use the following url.
  var url = 'http://localhost:9000/api/plans';
  //var url = 'https://edlnkr.herokuapp.com/api/plans';
  $scope.addLink = function(event) {
    event.preventDefault();
    chrome.tabs.getSelected(function(data) {
      $scope.chosenPlan.links.push({url: data.url, description: $scope.linkDescription});
      $http({
        url: url + '/' + $scope.chosenPlan._id,
        method: 'PATCH',
        data: $scope.chosenPlan
      })
      .success(function(message) {
        window.close();
        var message = "The link, " + data.url + ", was successfully saved to the plan, " + $scope.chosenPlan.title + ".";
        chrome.notifications.create("msg", {type: "basic", title: "Success!", message: message, iconUrl: "images/icon-38.png"}, function() {
          console.log(arguments);
        });
      })
      .error(function(data) {
        console.error(data);
        window.close();
        chrome.notifications.create("err", {type: "basic", title: "Error!", message: "Uh-oh.  Something went wrong.", iconUrl: "images/icon-38.png"}, function() {
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
