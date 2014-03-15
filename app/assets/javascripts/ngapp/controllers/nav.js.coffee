@hnApp.controller 'NavCtrl', ($scope, $modal, $log) ->

  $scope.open = ->
    modalInstance = $modal.open(
      backdrop: 'static'
      templateUrl: '/templates/submit_posts.html'
      controller: 'PostsCtrl'
    )
    ###modalInstance.result.then ((selectedItem) ->
      $scope.selected = selectedItem
    ), ->
      $log.info "Modal dismissed at: " + new Date()###