import firebase from 'firebase'

// Get a reference to the database service
var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

function createNewGroup() {
    
}