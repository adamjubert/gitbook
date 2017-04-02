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
        <div className="form-btn-container">
          <input type="submit" value="Add Issue" className='btn-add-issue' />
        </div>
      </form>
    );
  }

  issueBody() {
    return (
      <label>
        <textarea
          value={this.state.body}
          onChange={this.update('body')}
          placeholder="Add a body...">
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
          onChange={this.update('title')}
          placeholder="Add a title...">
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
    const issues = this.props.issues[repo.name];

    let issuesIndex = '';
    let issuesCount = 0;

    if ( issues ) {
      issuesIndex = <IssueIndex issues={ issues }/>;
      issuesCount = Object.keys(issues).length;
    }

    return(
      <div className="repo-item" >
        <div className="repo-item-description">
          <a href={ repo.html_url } target="_blank">{ repo.name }</a>
          <p>{ repo.description ? repo.description : "No Description" }</p>

          <ul>
            <li>{ repo.stargazers_count } Stars</li>
            <li>{ repo.watchers_count } Watchers </li>
            <li>{ issuesCount } Issues</li>
          </ul>
        </div>

        <div className="issue-index-container">
          { issuesIndex }

          <div className="issue-form-container">
            { this.issueForm() }
          </div>
        </div>

      </div>
    );
  }
}

export default RepoIndexItem;
