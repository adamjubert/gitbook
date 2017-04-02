import React from 'react';

class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.issueForm = this.issueForm.bind(this);
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



  render() {

    return(
      <div className="issue-show" >
        { this.issueForm }
      </div>
    );
  }
}

export default IssueForm;
