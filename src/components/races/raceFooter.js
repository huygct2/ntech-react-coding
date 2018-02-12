import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RaceFooter extends Component {
  render() {
    const { marketLength, description } = this.props;

    return (
      <div className="sports__footer">
        <div className="sports__all">
          <a className="has-text-weight-bold is-uppercase">View all markets {`(${marketLength})`}</a>
        </div>
        <span>{description}</span>
      </div>
    )
  }
}

RaceFooter.defaultProps = {
  description: 'Prices indicative until login & may change before bet is accepted',
  marketLength: 0
};

RaceFooter.propTypes = {
  marketLength: PropTypes.number,
  description: PropTypes.string
}

export default RaceFooter;
