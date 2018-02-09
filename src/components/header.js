import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">Sport</span>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to="/sport">Sport 1</Link>
                <Link className="navbar-item" to="/sport">Sport 2</Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">Races</span>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to="/race">Race 1</Link>
                <Link className="navbar-item" to="/race">Race 2</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
