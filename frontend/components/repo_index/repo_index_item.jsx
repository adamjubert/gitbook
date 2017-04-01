import React from 'react';

class RepoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.showIssues = this.showIssues.bind(this);
    this.handleViewIssues = this.handleViewIssues.bind(this);
  }

  handleViewIssues(e) {
    this.state.clicked ? this.setState({ clicked: false }) : this.showIssues(e);
  }

  showIssues(e) {
    const username = this.props.user;
    const repo = e.target.id;
    this.props.fetchIssues(username, repo).then(() => this.addIssuesToRepo());
  }

  addIssuesToRepo() {
    this.setState({ clicked: true });
  }

  render() {
    const repo = this.props.repo;
    const issues = <h1>Issues :)</h1>;
    const viewIssuesButton = this.state.clicked ? 'Hide Issues' : 'View Issues';
    return(
      <div className="repo-item" >
        <a href={ repo.html_url } target="_blank">{ repo.name }</a>
        <p>{ repo.description }</p>

        <ul>
          <li>{ repo.stargazers_count } Stars</li>
          <li>{ repo.watchers_count } Watchers </li>
          <li>{ repo.open_issues_count } Issues</li>
        </ul>
        <div className="issues-buttons">
          <button>Add Issue</button>
          <button onClick={ this.handleViewIssues } id={ repo.name }>{ viewIssuesButton }</button>
        </div>
        { this.state.clicked ? issues : '' }
      </div>
    );
  }
}

export default RepoIndexItem;
