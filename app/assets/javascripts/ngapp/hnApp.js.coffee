@hnApp = angular.module('hnApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])

# making AngularJS work with CSRF protection
hnApp.config ($httpProvider) ->
  authToken = $("meta[name=\"csrf-token\"]").attr("content")
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken

# configure our location provider to be in HTML5 mode (remove # from URL)
@hnApp.config ($locationProvider) ->
  $locationProvider.html5Mode true

# AngularJS Routes
@hnApp.config ($routeProvider) ->
  # $locationProvider.html5Mode true
  $routeProvider
    .when('/', {
        templateUrl: '/templates/dashboard.html',
        controller: 'DashboardCtrl'
      })
    .when('/new', {
        templateUrl: '/templates/test.html',
        controller: 'DashboardCtrl'
      })
    .when('/submit', {
        templateUrl: '/templates/submit_posts.html',
        controller: 'PostsCtrl'
      })
    .when('/modify', {
        templateUrl: '/templates/test.html',
        controller: 'DashboardCtrl'
      })
    .when('/posts', {
        templateUrl: '/templates/test.html',
        controller: 'DashboardCtrl'
      })
    .when('/comments', {
        templateUrl: '/templates/test.html',
        controller: 'DashboardCtrl'
      })
    .otherwise({
      templateUrl: '/templates/dashboard.html',
      controller: 'DashboardCtrl'
    })
