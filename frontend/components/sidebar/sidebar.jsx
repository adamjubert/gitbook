import React from 'react';


class Sidebar extends React.Component {


  render() {
    const faLoc = <i class="fa fa-map-marker" aria-hidden="true"></i>;
    const user = this.props.user;

    let userLocation =
      <li>
        <i className="fa fa-map-marker" aria-hidden="true" />
        { user.location }
      </li>;
    let userEmail =
      <li>
        <i className="fa fa-envelope" aria-hidden="true" />
        <a href={ "mailto:" + user.email}>{ user.email }</a>
      </li>;
    let userWebsite =
      <li>
        <i className="fa fa-home" aria-hidden="true" />
        <a href={ user.blog } target="_blank">{ user.blog }</a>
      </li>;


    return(
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="sidebar-inside">
            <img className="profile-pic" src={ user.avatar_url } />
            <h2>{ user.name }</h2>
            <h4>{ user.login }</h4>
            <h4>{ user.bio }</h4>
            <ul>
              { user.location ? userLocation : '' }
              { user.email ? userEmail : '' }
              { user.blog ? userWebsite : '' }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
