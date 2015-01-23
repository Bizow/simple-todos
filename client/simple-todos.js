Meteor.subscribe("tasks");

Template.body.events({
    "change .hide-completed input": function(e){
        console.log(e.target.checked);
        Session.set("hideCompleted", e.target.checked);
    }
});


Template.body.helpers({
    //hideCompleted: function () {
    //    return Session.get("hideCompleted");
    //},
    incompleteCount: function () {
        return Tasks.find({checked: {$ne: true}}).count();
    }
});


Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});