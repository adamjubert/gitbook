import React from 'react';

class IssueShow extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const issue = this.props.issue;
    debugger
    return(
      <div className="issue-show" >
        <div>
          <h3>{ issue.title }</h3>
          <h3>{ issue.state }</h3>
          <p>{ issue.body }</p>
        </div>
      </div>
    );
  }
}

export default IssueShow;
