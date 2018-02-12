import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RaceFooter extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className="sports__footer">
        <div className="sports__all">
          <a className="has-text-weight-bold is-uppercase">{title}</a>
        </div>
        <span>{description}</span>
      </div>
    );
  }
}

RaceFooter.defaultProps = {
  description: 'Prices indicative until login & may change before bet is accepted',
  title: ''
};

RaceFooter.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default RaceFooter;
