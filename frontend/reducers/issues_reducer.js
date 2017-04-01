import { RECEIVE_ISSUES, RECEIVE_ISSUE } from '../actions/issue_actions';

const IssuesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ISSUES:
      if (action.issues.length > 0) {
        let repoUrl = action.issues[0].repository_url;
        let repoName = repoUrl.substr(repoUrl.lastIndexOf('/') + 1);
        let issues = {};
        action.issues.forEach((issue) => issues[issue.number] = issue )
        return Object.assign({}, oldState, { [repoName] : issues } );
      }
      return Object.assign({}, oldState);
    case RECEIVE_ISSUE:
      let repoUrl = action.issue.repository_url;
      let repoName = repoUrl.substr(repoUrl.lastIndexOf('/') + 1);
      let allIssues = oldState[repoName];
      allIssues[action.issue.number] = action.issue;
      debugger
      return Object.assign({}, oldState, { [repoName] : allIssues } );
    default:
      return oldState;
  }
};

export default IssuesReducer;
