import React, { Component } from 'react';
import BetOdd from '../bet-odd'
import './style.scss'

class SportContent extends Component {
  renderSportInfo() {
    const sports = [
      {
        name: 'Tottenham',
        returnWin: 2.00
      },
      {
        name: 'Draw',
        returnWin: 3.75
      },
      {
        name: 'Arsenal',
        returnWin: 3.40
      }
    ]

    return (
      <div className="columns sports__bet">
        {sports.map((sport, i) =>
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
    return (
      <div className="sports__footer">
        <div className="sports__all">
          <a className="has-text-weight-bold is-uppercase">View all markets (40)</a>
        </div>
        <span>Prices indicative until login &may change before bet is accepted</span>
      </div>
    )
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
