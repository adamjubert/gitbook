import { connect } from 'react-redux';
import { updateIssue } from '../../actions/issue_actions';
import IssueShow from './issue_show';

const mapStateToProps = (state, ownProps) => ({
    issue: ownProps.issue
});

const mapDispatchToProps = dispatch => ({
  updateIssue: (issue) => dispatch(updateIssue(issue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueShow);
