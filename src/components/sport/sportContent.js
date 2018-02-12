import React, { Component } from 'react';
import BetOdd from '../betOdd/betOdd';
import RaceFooter from '../races/raceFooter';

import './style.scss';

class SportContent extends Component {
  renderSportInfo(propositions) {
    return (
      <div className="columns sports__bet">
        {propositions.map((sport, i) =>
          <div key={i} className="column is-uppercase">
            <span className="has-text-weight-semibold">{sport.name}</span>
            <BetOdd returnWin={sport.returnWin.toFixed(2)} />
          </div>
        )}
      </div>
    )
  }

  renderSportHeader() {
    return (
      <div className="sports__header has-text-weight-semibold">
        Straight
      </div>
    )
  }

  renderSportFooter(marketLength) {
    return <RaceFooter title={`View all markets (${marketLength})`}/>
  }

  render() {
    const { marketLength, propositions = [] } = this.props;

    return (
      <div className="sports has-text-centered">
        {this.renderSportHeader()}
        {this.renderSportInfo(propositions)}
        {this.renderSportFooter(marketLength)}
      </div>
    );
  }
}

export default SportContent;
