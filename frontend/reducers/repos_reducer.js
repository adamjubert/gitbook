import { RECEIVE_REPOS } from '../actions/repo_actions';

const ReposReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_REPOS:
      return action.repos;
    default:
      return oldState;
  }
};

export default ReposReducer;
