import { RECEIVE_ISSUES, RECEIVE_ISSUE } from '../actions/issue_actions';

function getRepoNameFromUrl(url) {
  return url.substr(url.lastIndexOf('/') + 1);
}

const IssuesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ISSUES:
      if (action.issues.length > 0) {
        let repoUrl = action.issues[0].repository_url;
        let repoName = getRepoNameFromUrl(repoUrl);
        let issues = {};
        action.issues.forEach((issue) => issues[issue.number] = issue )
        return Object.assign({}, oldState, { [repoName] : issues } );
      }
      return Object.assign({}, oldState, action.issues);
    case RECEIVE_ISSUE:
      let repoUrl = action.issue.repository_url;
      let repoName = getRepoNameFromUrl(repoUrl);
      let allIssues = oldState[repoName];
      allIssues[action.issue.number] = action.issue;
      return Object.assign({}, oldState, { [repoName] : allIssues } );
    default:
      return oldState;
  }
};

export default IssuesReducer;
