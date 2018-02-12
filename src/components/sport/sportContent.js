import React, { Component } from 'react';
import BetOdd from '../betOdd/betOdd';
import RaceFooter from '../races/raceFooter';

import './style.scss';

class SportContent extends Component {
  renderSportInfo() {
    const { propositions = [] } = this.props;

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

  renderSportFooter() {
    const { marketLength } = this.props;
    return <RaceFooter marketLength={marketLength} />
  }

  render() {
    return (
      <div className="sports has-text-centered">
        {this.renderSportHeader()}
        {this.renderSportInfo()}
        {this.renderSportFooter()}
      </div>
    );
  }
}

export default SportContent;
