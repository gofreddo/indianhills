'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/outline', {
        templateUrl: 'views/outline.html',
        controller: 'OutlineCtrl',
        controllerAs: 'outline'
      })
      .when('/echo', {
        templateUrl: 'views/echo.html',
        controller: 'EchoCtrl',
        controllerAs: 'echo'
      })
      .when('/qAndA', {
        templateUrl: 'views/qanda.html',
        controller: 'QandaCtrl',
        controllerAs: 'qAndA'
      })
      .when('/qanda', {
        templateUrl: 'views/qanda.html',
        controller: 'QandaCtrl',
        controllerAs: 'qanda'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
