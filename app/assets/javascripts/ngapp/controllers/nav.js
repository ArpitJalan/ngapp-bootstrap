'use strict';

hnApp.controller('NavCtrl', function($scope, $modal, $rootScope, Post, Alert) {
  $scope.post = {
    url: "http://",
    title: ""
  };

  var modalInstance;
  $scope.open = function modal() {
    modalInstance = $modal.open({
      backdrop: 'static',
      templateUrl: '/templates/submit_posts.html',
      controller: 'NavCtrl'
    });
  };

  // handle save from pop-up form
  $scope.submitPost = function() {
    var attr = {};
    attr = $scope.post;
    // save post to db
    var newPost = Post.create(attr);
    // update posts
    $rootScope.posts.push(newPost);
    // close pop-up
    $scope.$close();
    // add alert
    Alert.add("success", "Post submitted successfully!");
  };

});
