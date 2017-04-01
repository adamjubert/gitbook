import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './app';
import MainPageContainer from './main_page/main_page_container';

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <HashRouter>
        <Route path='/' component={ MainPageContainer } />
      </HashRouter>
    </Provider>
  );

};

export default Root;
