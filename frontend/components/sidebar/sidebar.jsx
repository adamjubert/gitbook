import React from 'react';


class Sidebar extends React.Component {


  render() {
    const faLoc = <i class="fa fa-map-marker" aria-hidden="true"></i>;
    const user = this.props.user;

    let userBio =
      <li>
        <i className="fa fa-address-book" aria-hidden="true" />
        { user.location }
      </li>;

    let userLocation =
      <li>
        <i className="fa fa-map-marker" aria-hidden="true" />
        { user.location }
      </li>;
    let userEmail =
      <li>
        <i className="fa fa-envelope" aria-hidden="true" />
        { user.email }
      </li>;
    let userWebsite =
      <li>
        <i className="fa fa-home" aria-hidden="true" />
        { user.blog }
      </li>;


    return(
      <div className="sidebar-container">
        <div className="sidebar">
          <img className="profile-pic" src={ user.avatar_url } />
          <h2>{ user.name }</h2>
          <h4>{ user.login }</h4>
          <ul>
            { user.bio ? userBio : '' }
            { user.location ? userLocation : '' }
            { user.email ? userEmail : '' }
            { user.blog ? userWebsite : '' }
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
