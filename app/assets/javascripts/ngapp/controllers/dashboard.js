'use strict';

hnApp.controller('DashboardCtrl', function($scope, Post, $rootScope) {
  $rootScope.posts = Post.all();
});
