//Dependences
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from './components/App';
import Librery from './components/getLibrery';
import PostLibrery from './components/PostLibrery';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/getLibrery' component={Librery} />
      <Route exact path='/getLibrery/:id' component={Librery} />
      <Route exact path='/post-librery' component={PostLibrery} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
