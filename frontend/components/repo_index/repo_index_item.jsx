import React from 'react';
import IssueIndex from '../issue_index/issue_index';

class RepoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, body: '', title: '' };
    this.addIssueToRepo = this.addIssueToRepo.bind(this);
    this.issueForm = this.issueForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
    const username = this.props.username;
    const repo = this.props.repo.name;
    this.props.fetchIssues(username, repo);
  }

  addIssueToRepo() {
    let issue = {
      "title": this.state.title,
      "body": this.state.body,
      "repo": this.props.repo.name,
      "username": this.props.username
    };
    this.props.createIssue(issue).then( this.clearForm );
  }

  clearForm() {
    this.setState({ body: '', title: '' });
  }


  issueForm() {
    return (
      <form onSubmit={ this.addIssueToRepo } className='issue-form'>
        { this.issueTitle() }
        { this.issueBody() }
        <input type="submit" value="Add Issue" className='btn-add-issue' />
      </form>
    );
  }

  issueBody() {
    return (
      <label>
        <textarea
          value={this.state.body}
          onChange={this.update('body')}>
        </textarea>
      </label>
    );
  }

  issueTitle() {
    return (
      <label>
        <input
          type="text"
          value={this.state.title}
          onChange={this.update('title')}>
        </input>
      </label>
    );
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
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

        <div className="issue-form-container">
          { this.issueForm() }
        </div>

      </div>
    );
  }
}

export default RepoIndexItem;
