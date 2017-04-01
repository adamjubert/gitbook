import { RECEIVE_ISSUES } from '../actions/issue_actions';

const IssuesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ISSUES:
    return [action.issues];

    default:
      return oldState;
  }
};

export default IssuesReducer;
