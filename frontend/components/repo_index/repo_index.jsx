import React from 'react';
import RepoIndexItem from './repo_index_item';

class RepoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }

  componentWillMount() {
    this.props.fetchRepos(this.props.user.login)
      .then(() => this.setState({fetching: false}));
  }

  render() {
    if ( this.state.fetching ) { return null; }
    const repos = this.props.repos;

    return(
      <div className="repo-index-container">
        <ul>
          { repos.map((repo) => (
            <RepoIndexItem repo={ repo }
              user={ this.props.user.login }
              fetchIssues = { this.props.fetchIssues }
              key={ repo.id }/>
          )) }
        </ul>
      </div>
    );
  }
}

export default RepoIndex;
