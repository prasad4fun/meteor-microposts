template.posts.helpers({
  posts: function(){
    Posts.find({}, {sort:{createdAt: -1}});
  }
});
