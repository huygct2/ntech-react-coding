import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/sport">Sport</Link>
            <Link className="navbar-item" to="/race">Race</Link>
          </div>
        </div>
      </nav>
    );
  }
}
