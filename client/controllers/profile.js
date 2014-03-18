/**
 * Created by lukame on 2/20/14.
 */

Meteor.subscribe('userData');
Meteor.subscribe('users');

Template.profile.rendered = function(){

}

Template.profile.events({
    'click #save-profile': function(){
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();

        user = {
            firstname: firstname,
            lastname: lastname
        }

        Meteor.call('updateUser', Meteor.userId(), user, function (error, result) {
            alert("User updated!");
        });
        //Meteor.users.update({_id:Meteor.userId()}, {$set:user});
        //console.log(Meteor.user().firstname);
        //console.log(Meteor.user().lastname);

    },
    'change .fileUploader': function (e) {
        var files = e.target.files;
        for (var i = 0, f; f = files[i]; i++) {
            users.storeFile(f);
        }
    }
});


Template.profile.files = function() {
    //show all files that have been published to the client, with most recently uploaded first
    return users.find({owner: Meteor.userId()}, { sort: { uploadDate:-1 } });
};