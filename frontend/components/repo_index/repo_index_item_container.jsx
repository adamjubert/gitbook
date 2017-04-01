import { connect } from 'react-redux';
import { fetchIssues } from '../../actions/issue_actions';
import RepoIndexItem from './repo_index_item';

const mapStateToProps = ({ issues }) => {
  return {
    issues
  };
};

const mapDispatchToProps = dispatch => ({
  fetchIssues: (username, repo) => dispatch(fetchIssues(username, repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoIndexItem);
