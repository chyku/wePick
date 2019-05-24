import { CREATE_USER, CREATE_GROUP, SET_GROUP } from '../actions/types';

const initialState = {
  userId: '',
  groupdId: ''
};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_USER:
      return {
        ...state,
        userId: action.payload
      };
    case CREATE_GROUP:
    return {
        ...state,
        userId: action.payload.userId,
        groupId: action.payload.groupId
      };
    case SET_GROUP:
    return {
        ...state,
        groupId: action.payload
      };
    default:
      return state;
  }
}