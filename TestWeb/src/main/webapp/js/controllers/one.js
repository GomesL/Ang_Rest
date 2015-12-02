(function() {
  'use strict';
  angular.module("mainApp.one", ['ngRoute'])
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
  .controller('MainController',['$scope', function ($scope) {
      $scope.message = "This page will be used to display add student form";
    }])
})();