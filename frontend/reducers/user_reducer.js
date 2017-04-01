import { RECEIVE_USER } from '../actions/user_actions';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, oldState, action.user);
    default:
      return oldState;
  }
};

export default UserReducer;
