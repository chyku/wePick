import { CREATE_USER, CREATE_GROUP, SET_GROUP } from '../actions/types';

const initialState = {
  userId: '',
  groupdId: ''
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_USER:
      return Object.assign({}, state, {
        userId: action.payload
      });
    case CREATE_GROUP:
      return Object.assign({}, state, {
        groupId: action.payload
      });
    case SET_GROUP:
      return Object.assign({}, state, {
        groupId: action.payload
      })
    default:
      return state;
  }
}