import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import ProfileShow from '../profile_show/profile_show';
import Sidebar from '../sidebar/sidebar';
import RepoIndexContainer from '../repo_index/repo_index_container'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser("adamjubert");
    this.props.fetchRepos("adamjubert");
  }


  render() {
    return (
      <div>
        <NavBar user={ this.props.user }/>
        <div className="body">
          <Sidebar user={ this.props.user } />
          <RepoIndexContainer user={ this.props.user }/>
        </div>
      </div>
    );
  }

}

export default MainPage;
