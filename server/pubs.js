/**
 * Created by lukame on 2/20/14.
 */


//Publish DDP
Meteor.publish("userData", function () {
    if (this.userId) {
     return Meteor.users.find({_id:this.userId}, {});
    }
});

Meteor.publish('users', function() {
    if (this.userId) {
        return users.find({ owner: this.userId }, { limit: 30 });
    }
});