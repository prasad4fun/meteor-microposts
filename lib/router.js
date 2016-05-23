Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    //posts Router
    this.route('posts',{
      path:'/',
      template: 'posts'
    });

    //about route
    this.route('about');
    this.route('profile');
})
