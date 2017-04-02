import React from 'react';
import RepoItemContainer from '../repo_item/repo_item_container';
import LoadingSpinner from '../loading_spinner/loading_spinner';

class RepoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }

  componentDidMount() {
    this.props.fetchRepos("adamjubert")
      .then(() => this.setState({fetching: false}));
  }

  render() {
    if ( this.state.fetching ) { return (
      <LoadingSpinner parentClass="repo-index-container"  />
    );}

    const repos = this.props.repos;
    return(
      <div className="repo-index-container">
        <ul>
          { repos.map((repo) => (
            <RepoItemContainer repo={ repo }
              username={ this.props.user.login }
              key={ repo.id }/>
          )) }
        </ul>
      </div>
    );
  }
}

export default RepoIndex;
