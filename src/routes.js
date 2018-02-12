import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import { paths } from './constants/path';
import Header from './components/header/header';
import Sport from './containers/sport/sport';
import Races from './containers/races/races';
import Switch from 'react-router-dom/Switch';

const PublicRoutes = () => (
  <Router>
    <div>
      <Header/>
      <hr />
      <Switch>
        <Route path={paths.sport} component={Sport} />
        <Route path={paths.race} component={Races} />
        <Redirect from={paths.home} to={paths.sport} />
      </Switch>  
    </div>
  </Router>
)

export default PublicRoutes;
