import {database} from '../../utils/firebase-setup'
export const CREATE_USER = 'CREATE_USER';
export const CREATE_GROUP = 'CREATE_GROUP';
export const SET_GROUP = 'SET_GROUP';

export const addGroup = (name) => async dispatch => {
    var groupId = Math.floor(100000 + Math.random() * 900000);
    // Should probably check if it's a unique groupId

    var myRef = database.ref().push();
    var key = myRef.key();

    database.ref('groups/' + groupId + 'users/').push({
        name: name,
        finished: false,
        is_admin: true
    })

    var ret = {
        groupId: groupId,
        userId: key
    }
    return ret;
};


export const addUser = (groupId, name) => async dispatch => {
    var myRef = database.ref().push();
    var key = myRef.key();

    database.ref('groups/' + groupId + 'users/').push({
        name: name,
        finished: false,
        is_admin: false
    })

    return key;
};

export const setGroupId = (groupId) => async dispatch => {
    // Check if the group exists
    return groupId;
};

// Using the 
// export const fetchReceipt = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };
