import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../constants/path';

export default class extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div>
          <div className="navbar-start">
            <Link className="navbar-item has-text-weight-bold" to={paths.sport}>Sport</Link>
            <Link className="navbar-item has-text-weight-bold" to={paths.race}>Race</Link>
          </div>
        </div>
      </nav>
    );
  }
}
