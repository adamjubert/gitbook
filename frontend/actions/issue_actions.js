import * as IssueApiUtil from '../util/issue_api_util';

export const RECEIVE_ISSUES = "RECEIVE_ISSUES";

export const fetchIssues = (username, repo) => dispatch => {
  return IssueApiUtil.fetchIssues(username, repo).then(issues => {
    dispatch(receiveIssues(issues));
  });
};

const receiveIssues = issues => ({
  type: RECEIVE_ISSUES,
  issues
});
