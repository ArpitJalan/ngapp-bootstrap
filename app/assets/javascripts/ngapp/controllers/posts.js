'use strict';

hnApp.controller('PostsCtrl', function($scope, Post, $routeParams) {
  $scope.post = Post.find($routeParams.id);
  console.log($scope.post);
});
