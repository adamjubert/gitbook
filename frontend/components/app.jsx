import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = (props) => {

  return(
    <div>
      { <NavBarContainer /> }
      { props.children }
    </div>
  );

};

export default App;
