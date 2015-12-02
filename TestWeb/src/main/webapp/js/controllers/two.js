(function() {
  'use strict';
  angular.module("mainApp.two", ['ngRoute'])
  .config(['$routeProvider',function ($routeProvider) {
      $routeProvider.
      when('/main', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
      }).
      when('/second', {
          templateUrl: 'views/Second.html',
          controller: 'SecondController'
      }).
      otherwise({
          redirectTo: '/main'
      })
  }])
  .controller('SecondController', ['$scope', function ($scope) {
	  $scope.total = 100;
  }])
})();