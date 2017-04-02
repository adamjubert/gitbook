import { connect } from 'react-redux';
import { fetchIssues, createIssue } from '../../actions/issue_actions';
import RepoItem from './repo_item';

const mapStateToProps = ({ issues }) => ({
    issues
});

const mapDispatchToProps = dispatch => ({
  createIssue: (issue) => dispatch(createIssue(issue)),
  fetchIssues: (username, repo) => dispatch(fetchIssues(username, repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoItem);
