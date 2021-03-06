'use strict';

// initialize Angular App
var hnApp = angular.module('hnApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap'
  // 'mgcrea.ngStrap'
]);

// making AngularJS work with CSRF protection
hnApp.config(function($httpProvider) {
  var authToken = $("meta[name=\"csrf-token\"]").attr("content");
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});

// Routes
hnApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/dashboard', {
        templateUrl: '/templates/dashboard.html',
        controller: 'DashboardCtrl'
      })
    .when('/new', {
        templateUrl: '/templates/test.html',
        controller: 'DashboardCtrl'
      })
    .when('/show', {
        templateUrl: '/templates/test.html',
        controller: 'DashboardCtrl'
      })
    .when('/submit', {
        templateUrl: '/templates/submit_posts.html',
        controller: 'PostsCtrl'
      })
        templateUrl: '/templates/test.html',
    .when('/modify', {
        controller: 'DashboardCtrl'
      })
    .when('/posts/:id', {
        templateUrl: '/templates/post.html',
        controller: 'PostsCtrl'
      })
    .otherwise({
        templateUrl: '/templates/dashboard.html',
        controller: 'DashboardCtrl'
      });
});
