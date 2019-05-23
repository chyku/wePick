import firebase from 'firebase'

// Get a reference to the database service
var database = firebase.database();

// TODO: add receipt info 
function createNewGroup(adminId, name, bankId) {
    // Generates a random 6 digit number for the group
    var groupId = Math.floor(100000 + Math.random() * 900000);
    firebase.database().ref('groups/' + groupId + 'users/' + adminId).set({
        bank_id: bankId,
        name: name,
        finished: false,
        is_admin: true
    })
}

function addUserToGroup(groupId, userId, name, bankId) {
    firebase.database().ref('groups/' + groupId + 'users/' + userId).set({
        bank_id: bankId,
        name: name,
        finished: false,
        is_admin: false
    })
}

function finishProcess()