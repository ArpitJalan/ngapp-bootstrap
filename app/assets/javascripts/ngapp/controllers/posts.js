hnApp.controller('PostsCtrl', function($scope, $modalInstance, Post) {
  $scope.posts = [];
  $scope.post = {
    url: "http://",
    title: ""
  };
  $scope.submitPost = function() {
    var attr = {};
    var attr = $scope.post;
    var newPost = Post.create(attr);
    $scope.posts.push(newPost);
    var testPosts = Post.all();
    console.log(testPosts);

    /*$scope.posts.push($scope.post);
    $scope.post = {
      url: "http://",
      title: ""
    };*/
    // console.log($scope.posts);
  };
  $scope.cancel = function() {
    $modalInstance.dismiss("cancel");
  };
});
