import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/home'
import Sport from './views/sports';
import Races from './views/races';

const PublicRoutes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sport">Sport</Link></li>
        <li><Link to="/race">Race</Link></li>
      </ul>

      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/sport" component={Sport}/>
      <Route path="/race" component={Races}/>
    </div>
  </Router>
)

export default PublicRoutes;
