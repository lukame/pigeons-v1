/**
 * Created by lukame on 2/20/14.
 */


Payslips = new Meteor.Collection('payslips');

Payslips.allow({
    insert: function(userId){
        return userId;
    },
    update: function(userId){
        return userId;
    }
});


Meteor.users.allow({
    update: function(userId){
        return userId;
    }
});

/*
PayslipsFS = new CollectionFS('payslips', {autopublish: false});

PayslipsFS.allow({
    insert: function(userId, file) { return userId && file.owner === userId; },
    update: function(userId, file, fields, modifier) {
        return userId && file.owner === userId;
    },
    remove: function(userId, file) { return false; }
});

*/

users = new CollectionFS('users');

users.allow({
    insert: function(userId, file) { return userId && file.owner === userId; },
    update: function(userId, file, fields, modifier) {
        return userId && file.owner === userId;
    },
    remove: function(userId, file) { return false; }
});
