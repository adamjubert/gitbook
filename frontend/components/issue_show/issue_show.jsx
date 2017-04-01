import React from 'react';

class IssueShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, title: this.props.issue.title, body: this.props.issue.body };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleEditClick = this.toggleEditClick.bind(this);
    this.issueForm = this.issueForm.bind(this);
    this.issueText = this.issueText.bind(this);
    this.updateIssue = this.updateIssue.bind(this);
  }

  handleButtonClick(buttonAction) {
    let issue = this.props.issue;
    issue.state = buttonAction;
    // issue.username = issue.user.login;
    // let repoUrl = issue.repository_url;
    // let repo = repoUrl.substr(repoUrl.lastIndexOf('/') + 1);
    // issue.repo = repo;
    // debugger
    this.props.updateIssue(issue);
  }

  updateIssue() {
    let issue = this.props.issue;
    issue.title = this.state.title;
    issue.body = this.state.body;
    debugger
    this.props.updateIssue(issue).then(this.toggleEditClick);
  }

  issueForm() {
    debugger
    return (
      <form onSubmit={ this.updateIssue } className='issue-form'>
        { this.issueTitle() }
        { this.issueBody() }
        <input type="submit" value="Update Issue" className='btn-add-issue' />
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

  issueText() {
    debugger
    const issue = this.props.issue;

    return(
      <div className="issue-text">
        <p><span className="issue-title">{ issue.title }</span> { issue.body }</p>
        <a onClick={ this.toggleEditClick }>Edit Issue</a>
      </div>
    );
  }

  toggleEditClick() {
    let editing = this.state.editing === true ? false : true;
    this.setState({ editing });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }


  render() {
    const issue = this.props.issue;
    let buttonText, buttonAction;
    if (issue.state === "open") {
      buttonText = "Close Issue";
      buttonAction = "close";
    } else {
      buttonText = "Reopen Issue";
      buttonAction = "open";
    }
    return(
      <div className="issue-show" >
        <div>
          <h3>{ issue.state }</h3>
          { this.state.editing ? this.issueForm() : this.issueText() }
          <button onClick={ () => this.handleButtonClick(buttonAction) }> { buttonText } </button>
        </div>
      </div>
    );
  }
}

export default IssueShow;
