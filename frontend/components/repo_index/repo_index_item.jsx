import React from 'react';
import IssueIndex from '../issue_index/issue_index';

class RepoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.showIssues = this.showIssues.bind(this);
    this.handleViewIssues = this.handleViewIssues.bind(this);
  }

  componentDidMount() {
    const username = this.props.username;
    const repo = this.props.repo.name;
    this.props.fetchIssues(username, repo).then(() => this.addIssuesToRepo());
  }

  handleViewIssues(e) {
    this.state.clicked ?
      this.setState({ clicked: false }) :
      this.showIssues(e);
  }

  showIssues(e) {
    const username = this.props.username;
    const repo = e.target.id;
    this.props.fetchIssues(username, repo).then(() => this.addIssuesToRepo());
  }

  addIssuesToRepo() {

  }

  render() {
    const repo = this.props.repo;

    let issues = this.props.issues[repo.name] ?
      <IssueIndex issues={ this.props.issues[repo.name] }/> :
      '';

    return(
      <div className="repo-item" >
        <a href={ repo.html_url } target="_blank">{ repo.name }</a>
        <p>{ repo.description }</p>

        <ul>
          <li>{ repo.stargazers_count } Stars</li>
          <li>{ repo.watchers_count } Watchers </li>
          <li>{ repo.open_issues_count } Open Issues</li>
        </ul>


        {issues}

        <div className="issues-buttons">
          <button>Add Issue</button>
        </div>

      </div>
    );
  }
}

export default RepoIndexItem;
