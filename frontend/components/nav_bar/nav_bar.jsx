import React from 'react';


class NavBar extends React.Component {

  render() {
    return(
      <div className='nav-container'>
        <div className='nav'>
          <a href='#'><h1>Gitbook</h1></a>
          <div className='nav-right'>
            <h4>Logged in as &nbsp;</h4>
            <h4>{ this.props.user.login }</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
