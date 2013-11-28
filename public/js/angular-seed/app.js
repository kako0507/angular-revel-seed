'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{%');
  $interpolateProvider.endSymbol('%}');
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: '/public/html/angular-seed/partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: '/public/html/angular-seed/partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
