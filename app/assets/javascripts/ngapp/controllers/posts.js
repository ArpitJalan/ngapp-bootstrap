hnApp.controller('PostsCtrl', function($scope, $modalInstance, Post) {
  $scope.posts = [];
  $scope.post = {
    url: "http://",
    title: ""
  };
  $scope.submitPost = function() {
    $scope.posts.push($scope.post);
    $scope.post = {
      url: "http://",
      title: ""
    };
    console.log($scope.posts);
  };
  $scope.cancel = function() {
    $modalInstance.dismiss("cancel");
  };
});
