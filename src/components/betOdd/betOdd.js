import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class BetOdd extends Component {
  render() {
    const { returnWin } = this.props;

    return (
      <div className="bet-odd box">
        <span>{returnWin}</span>
      </div>
    );
  }
}

BetOdd.defaultProps = {
  returnWin: 0
};

BetOdd.propTypes = {
  returnWin: PropTypes.any
};

export default BetOdd;
