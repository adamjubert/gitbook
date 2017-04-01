import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import MainPage from './main_page';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (username) => dispatch(fetchUser(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
