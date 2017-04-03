import { connect } from 'react-redux';
import { fetchRepos } from '../../actions/repo_actions';
import { fetchIssues } from '../../actions/issue_actions';
import { githubUsername } from '../../customize';
import RepoIndex from './repo_index';

const mapStateToProps = ({ user, repos }) => ({
    user,
    repos,
    githubUsername
});

const mapDispatchToProps = dispatch => ({
  fetchRepos: (username) => dispatch(fetchRepos(username)),
  fetchIssues: (username, repo) => dispatch(fetchIssues(username, repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoIndex);
