
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.before(function() {
    if(!Meteor.userId()) {
        this.redirect('login');
    }
}, {except: ['login']});

Router.map(function() {

    this.route('login', {
        path: '/',
        template:'login'
    });

    this.route('home', {
        path: '/home',
        template:'home'
    });

    this.route('profile', {
        path: '/profile/:_id'
    });

});

