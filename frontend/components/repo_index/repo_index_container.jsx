import { connect } from 'react-redux';
import { fetchRepos } from '../../actions/repo_actions';
import RepoIndex from './repo_index';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRepos: (username) => dispatch(fetchRepos(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoIndex);
