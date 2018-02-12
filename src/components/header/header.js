import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../constants/path';

export default class extends Component {
  render() {
    console.log(this.props)
    return (
      <nav className="navbar is-transparent">
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item has-text-weight-bold" to={paths.sport}>Sport</Link>
            <Link className="navbar-item has-text-weight-bold" to={paths.race}>Race</Link>
          </div>
        </div>
      </nav>
    );
  }
}
