import React from 'react';
import IssueForm from '../issue_form/issue_form';

class IssueShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      title: this.props.issue.title,
      body: this.props.issue.body
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleEditClick = this.toggleEditClick.bind(this);
    this.issueForm = this.issueForm.bind(this);
    this.issueText = this.issueText.bind(this);
    this.updateIssue = this.updateIssue.bind(this);
  }

  handleButtonClick(buttonAction) {
    let issue = this.props.issue;
    issue.state = buttonAction;
    this.props.updateIssue(issue);
  }

  updateIssue() {
    let issue = this.props.issue;
    issue.title = this.state.title;
    issue.body = this.state.body;
    this.props.updateIssue(issue).then(this.toggleEditClick);
  }

  issueForm() {
    return (
      <form onSubmit={ this.updateIssue } className='issue-form'>
        { this.issueTitle() }
        { this.issueBody() }
        <div className='form-btn-container'>
          <input type='submit' value='Update Issue' className='btn-add-issue' />
        </div>
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
    const issue = this.props.issue;
    return(
      <div className="issue-text">
        <span className="issue-title">{ issue.title }</span>
        <p> { issue.body }</p>
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

    debugger
    return(
      <div className="issue-show" >
        <div>
          { this.state.editing ?
            this.issueForm() :
            this.issueText()
          }
          <div className="issue-options">
            <a onClick={ this.toggleEditClick }>Edit Issue</a>
            <span className="bullet">&bull;</span>
            <a onClick={ () =>
                this.handleButtonClick(buttonAction) }> { buttonText }
            </a>
            <span className="bullet">&bull;</span>
            <p className={ "issue-state-" + issue.state }>This Issue Is { issue.state }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IssueShow;
