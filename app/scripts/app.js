'use strict';

angular
  .module('collingsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/partial1', {
        templateUrl: "views/partial1.html",
                controller: 'MainCtrl'
      })
      .when('/partial2', {
        templateUrl: "views/partial2.html",
                controller: 'MainCtrl'
      })
      .when('/partial3', {
        templateUrl: "views/partial3.html",
                controller: 'MainCtrl'
      })
      .when('/partial4', {
        templateUrl: "views/partial4.html",
                controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      console.log("success!")
  });
