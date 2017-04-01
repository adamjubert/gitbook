import React from 'react';
import IssueShow from '../issue_show/issue_show';

class IssueIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return(
      <div className="issue-index" >
        <ul>
          { this.props.issues.map((issue) => (
            <IssueShow issue={ issue } key={ "issue-" + issue.id } />
          )) }
        </ul>
      </div>
    );
  }
}

export default IssueIndex;
