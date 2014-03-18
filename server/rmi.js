/**
 * Created by lukame on 3/17/14.
 */

Meteor.methods({
    updateUser: function(id, data){
        Meteor.users.update({_id:id}, {$set:data});
    },
    sendEmail: function(email, notification) {
        // send the email!
        //console.log(notification);
        Email.send({to:email, from:'info@welld.ch', subject:'Pigeon notification', text:notification});
    },
    updateUserNotification: function(userId, notificationField, active){
        //console.log(userId);
        //console.log(notificationField);
        if (notificationField=='addReimbursement' && active=="yes"){
            Meteor.users.update({_id:userId}, {$set:{addReimbursement:"yes"}});
        } else if (notificationField=='addReimbursement' && active=="no") {
            Meteor.users.update({_id:userId}, {$set:{addReimbursement:"no"}});
        }
        //console.log(Meteor.user());
    }
});