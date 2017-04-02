import * as IssueApiUtil from '../util/issue_api_util';

export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
export const RECEIVE_ISSUE = 'RECEIVE_ISSUE';


export const fetchIssues = (username, repo) => dispatch => {
  return IssueApiUtil.fetchIssues(username, repo).then(issues => {
    dispatch(receiveIssues(issues));
  });
};

export const createIssue = issue => dispatch => (
  IssueApiUtil.createIssue(issue).then(issue => dispatch(receiveIssue(issue)))
);

export const updateIssue = issue => dispatch => (
  IssueApiUtil.updateIssue(issue).then(issue => dispatch(receiveIssue(issue)))
);


const receiveIssues = issues => ({
  type: RECEIVE_ISSUES,
  issues
});

const receiveIssue = issue => ({
  type: RECEIVE_ISSUE,
  issue
});
