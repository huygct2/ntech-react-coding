import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BetOdd from '../betOdd/betOdd';
import RaceFooter from './raceFooter';
import _ from 'lodash';

import './style.scss';

class RaceContent extends Component {
  renderHeader() {
    return (
      <div className="runners__header columns has-text-left">
        <div className="column is-6">
          <span>Runner</span>
        </div>
        <div className="column is-3">
          <span>Win</span>
        </div>
        <div className="column is-3">
          <span>Place</span>
        </div>
      </div>
    )
  }

  getBetOdd(runner, key) {
    let bet = _.get(runner, 'fixedOdds.' + key);
    if(!bet) {
      bet = 0;
    }
    return bet.toFixed(2);
  }

  renderRunnerInfo(runners) {
    return (
      <div className="runners__list">
        {runners.map((runner, i) =>
          <div key={i} className="runners__list__item columns">
            <div className="runners__name column is-6 has-text-left">
              <span className="has-text-weight-semibold">{runner.barrierNumber}. {runner.runnerName}</span>
            </div>
            <div className="column is-3">
              <BetOdd returnWin={this.getBetOdd(runner, 'returnWin')} />
            </div>
            <div className="column is-3">
              <BetOdd returnWin={this.getBetOdd(runner, 'returnPlace')} />
            </div>
          </div>
        )}
      </div>
    );
  }

  renderRunnerFooter() {
    return <RaceFooter title="View full race card"/>;
  }

  render() {
    const { runners = [] } = this.props;

    return (
      <div className="runners has-text-centered">
        {this.renderHeader()}
        {this.renderRunnerInfo(runners)}
        {this.renderRunnerFooter()}
      </div>
    );
  }
}

RaceContent.defaultProps = {
  runners: []
};

RaceContent.propTypes = {
  runners: PropTypes.array
};

export default RaceContent;
