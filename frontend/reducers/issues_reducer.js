import { RECEIVE_ISSUES } from '../actions/issue_actions';

const IssuesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ISSUES:
      if (action.issues.length > 0) {
        let repoUrl = action.issues[0].repository_url;
        let repoName = repoUrl.substr(repoUrl.lastIndexOf('/') + 1);
        return Object.assign({}, oldState, { [repoName] : action.issues } );
      }
      return Object.assign({}, oldState);
    default:
      return oldState;
  }
};

export default IssuesReducer;
