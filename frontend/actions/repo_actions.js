import * as RepoApiUtil from '../util/repo_api_util';

export const RECEIVE_REPOS = 'RECEIVE_REPOS';


export const fetchRepos = (username) => dispatch => {
  return RepoApiUtil.fetchRepos(username).then(repos => {
    dispatch(receiveRepos(repos));
  });
};


const receiveRepos = repos => ({
  type: RECEIVE_REPOS,
  repos
});
