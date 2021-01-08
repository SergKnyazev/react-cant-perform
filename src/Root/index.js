import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {HOME_PAGE, ABOUT_PAGE} from '../config';

import HeaderComponent from './HeaderComponent';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';

const Root = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePage} />
        <Route path={ABOUT_PAGE} component={AboutPage} />
      </Switch>
    </BrowserRouter>
  )
};

export default Root;
