'use strict';

angular.module('EdLnkr')

.controller('MainController', function($scope) {
  $scope.links = [
    // need a service to get links from EdLnkr api
    {
      title: 'Smashing magazine',
      url: 'http://www.smashingmagazine.com/'
    },
    {
      title: 'Markticle',
      url: 'https://markticle.com'
    }
  ];

  $scope.plans = ['learn python', 'general', 'nodejs', 'cooking'];
});