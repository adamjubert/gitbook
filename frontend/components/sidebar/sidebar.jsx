import React from 'react';


class Sidebar extends React.Component {

  userEmail() {
    return(
      <li>
        <i className='fa fa-envelope' aria-hidden='true' />
        <a href={ 'mailto:' + this.user.email}>{ this.user.email }</a>
      </li>
    );
  }

  userLocation() {
    return(
      <li>
        <i className='fa fa-map-marker' aria-hidden='true' />
        { this.user.location }
      </li>
    );
  }

  userLogin() {
    return(
      <li>
        <i className='fa fa-user' aria-hidden='true' />
        { this.user.login }
      </li>
    );
  }

  userWebsite() {
    return(
      <li>
        <i className='fa fa-home' aria-hidden='true' />
        <a href={ this.user.blog } target='_blank'>{ this.user.blog }</a>
      </li>
    );
  }

  render() {
    this.user = this.props.user;

    return(
      <div className='sidebar-container'>
        <div className='sidebar'>
          <div className='sidebar-inside'>
            <img className='profile-pic' src={ this.user.avatar_url } />
            <h2>{ this.user.name }</h2>
            <h4>{ this.user.bio }</h4>
            <ul>
              { this.user.login ? this.userLogin() : '' }
              { this.user.location ? this.userLocation() : '' }
              { this.user.email ? this.userEmail() : '' }
              { this.user.blog ? this.userWebsite() : '' }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
