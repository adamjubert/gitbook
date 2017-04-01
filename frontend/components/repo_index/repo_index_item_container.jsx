import { connect } from 'react-redux';
import { fetchIssues, createIssue } from '../../actions/issue_actions';
import RepoIndexItem from './repo_index_item';

const mapStateToProps = ({ issues }) => {
  return {
    issues
  };
};

const mapDispatchToProps = dispatch => ({
  createIssue: (issue) => dispatch(createIssue(issue)),
  fetchIssues: (username, repo) => dispatch(fetchIssues(username, repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoIndexItem);
