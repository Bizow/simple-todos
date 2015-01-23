Template.taskList.helpers({
    tasks: function () {
        if (Session.get("hideCompleted")) {
            // If hide completed is checked, filter tasks
            return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
        } else {
            // Otherwise, return all of the tasks
            return Tasks.find({}, {sort: {createdAt: -1}});
        }
    }
});

Template.task.helpers({
    isOwner: function(){
        return this.owner === Meteor.userId();
    }
});


Template.task.events({
    "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Meteor.call("setChecked", this._id, ! this.checked);
    },
    "click .delete": function () {
        Meteor.call("deleteTask", this._id);
    },
    "click .toggle-private": function(){
        Meteor.call("setPrivate", this._id, ! this.private);
    }
});