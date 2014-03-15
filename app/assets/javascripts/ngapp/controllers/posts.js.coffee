@hnApp.controller 'PostsCtrl', ($scope, $modalInstance) ->

  $scope.posts = []
  $scope.post =
    url: "http://"
    title: ""

  $scope.submitPost = ->
    $scope.posts.push($scope.post);
    $scope.post =
      url: "http://"
      title: ""
    console.log($scope.posts)

  $scope.cancel = ->
    $modalInstance.dismiss "cancel"
