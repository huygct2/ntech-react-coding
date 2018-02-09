import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './containers/home';
import Sport from './containers/sports';
import Races from './containers/races';

const PublicRoutes = () => (
  <Router>
    <div>
      <Header/>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/sport" component={Sport} />
      <Route path="/race" component={Races} />
    </div>
  </Router>
)

export default PublicRoutes;
