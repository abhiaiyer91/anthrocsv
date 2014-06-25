'use strict';

/**
 * @ngdoc overview
 * @name csvconverterApp
 * @description
 * # csvconverterApp
 *
 * Main module of the application.
 */
angular
  .module('csvconverterApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
