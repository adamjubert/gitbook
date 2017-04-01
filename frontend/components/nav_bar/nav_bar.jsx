import React from 'react';


class NavBar extends React.Component {

  render() {
    return(
      <div className="nav-container">
        <div className="nav">
          <h1>Gitbook</h1>
          <div className="nav-right">
            <h4>Logged in as: &nbsp;</h4>
            <h4 id="nav-username">{ this.props.user.login }</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
