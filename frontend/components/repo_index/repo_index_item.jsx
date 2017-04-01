import React from 'react';

class RepoIndexItem extends React.Component {

  render() {
    const repo = this.props.repo;
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
          <button>View Issues</button>
        </div>

      </div>
    );
  }
}

export default RepoIndexItem;
