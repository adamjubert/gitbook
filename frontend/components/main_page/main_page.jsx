import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import Sidebar from '../sidebar/sidebar';
import RepoIndexContainer from '../repo_index/repo_index_container';
import LoadingSpinner from '../loading_spinner/loading_spinner';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }

  componentWillMount() {
    this.props.fetchUser('adamjubert')
      .then(this.props.fetchRepos('adamjubert'))
      .then(this.setState({ fetching: false }));
  }

  render() {
    if ( this.state.fetching ) {
      return <LoadingSpinner parentClass='body' />;
    }

    return (
      <div>
        <NavBar user={ this.props.user }/>
        <div className='body'>
          <Sidebar user={ this.props.user } />
          <RepoIndexContainer user={ this.props.user }/>
        </div>
      </div>
    );
  }

}

export default MainPage;
