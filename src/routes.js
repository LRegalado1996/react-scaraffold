//Dependences
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from './components/App';
import Librery from './components/getLibrery';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/getLibrery' component={Librery} />
      <Route exact path='/librery/:id' component={Librery} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
