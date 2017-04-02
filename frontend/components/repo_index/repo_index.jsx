import React from 'react';
import RepoIndexItemContainer from './repo_index_item_container';

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
    if ( this.state.fetching ) { return null; }
    const repos = this.props.repos;
    return(
      <div className="repo-index-container">
        <ul>
          { repos.map((repo) => (
            <RepoIndexItemContainer repo={ repo }
              username={ this.props.user.login }
              key={ repo.id }/>
          )) }
        </ul>
      </div>
    );
  }
}

export default RepoIndex;
