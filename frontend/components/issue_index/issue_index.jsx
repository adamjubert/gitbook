import React from 'react';
import IssueShowContainer from '../issue_show/issue_show_container';

class IssueIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let issues = this.props.issues;
    let issuesArray = Object.keys(this.props.issues);
    return(
      <div className='issue-index' >
        <ul>
          { issuesArray.map((key) => (
            <IssueShowContainer issue={ issues[key] } key={ 'issue-' + issues[key].id } />
          )) }
        </ul>
      </div>
    );
  }
}

export default IssueIndex;
