import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss'

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

export default BetOdd
