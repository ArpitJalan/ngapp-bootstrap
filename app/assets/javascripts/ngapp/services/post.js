hnApp.factory('Post', function($resource, $http) {
  var posts =
     $resource('/api/posts/:id', {
        id: @id,
        update: {method: 'PATCH'}
        // save: {method:'POST', isArray: false}
     });

  var Post = {
      all: posts.query(),
      save:
  }

  return Post;
});

// http://alexpotrykus.com/blog/2013/12/07/angularjs-with-rails-4-part-1/
