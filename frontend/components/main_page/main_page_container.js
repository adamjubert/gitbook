import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchRepos } from '../../actions/repo_actions';
import MainPage from './main_page';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  fetchRepos: (username) => dispatch(fetchRepos(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
