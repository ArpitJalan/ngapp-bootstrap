'use strict';

hnApp.factory('Post', function($resource, $http) {
  function Post() {
    this.service = $resource('/api/posts/:id', {id: '@id'}, {'update': { method: 'PUT' }});
  };

  Post.prototype.all = function() {
    return this.service.query();
  };
  Post.prototype.delete = function(postId) {
    return this.service.remove({id: postId});
  };
  Post.prototype.create = function(attr) {
    return this.service.save(attr);
  };
  Post.prototype.update = function(attr) {
    return this.service.update(attr);
  };

  return new Post;
});

// http://alexpotrykus.com/blog/2013/12/07/angularjs-with-rails-4-part-1/