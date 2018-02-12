import React, { Component } from 'react';
import BetOdd from '../bet-odd'
import './style.scss'

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

  renderRunnerInfo() {
    const runners = [
      {
        number: 3,
        name: 'Tosen Stardom',
        returnWin: 4.20,
        returnPlace: 1.75
      },
      {
        number: 1,
        name: 'Hartnell',
        returnWin: 5.00,
        returnPlace: 2.00
      },
      {
        number: 11,
        name: 'Shilelagh',
        returnWin: 7.00,
        returnPlace: 2.45
      },
      {
        number: 7,
        name: 'Mr Sneaky',
        returnWin: 7.50,
        returnPlace: 2.50
      }
    ]

    return (
      <div className="runners__list">
        {runners.map((runner, i) => 
          <div key={i} className="runners__list__item columns">
            <div className="runners__name column is-6 has-text-left">
              <span className="has-text-weight-semibold">{ runner.number }. { runner.name }</span>
            </div>
            <div className="column is-3">
              <BetOdd returnWin={runner.returnWin.toFixed(2)} />
            </div>
            <div className="column is-3">
              <BetOdd returnWin={runner.returnPlace.toFixed(2)} />
            </div>
          </div>
        )}  
      </div>
    )
  }

  renderRunnerFooter() {
    return (
      <div className="runners__footer">
        <div className="runners__all">
          <a className="has-text-weight-bold is-uppercase">View full race card</a>
        </div>
        <span>Prices indicative until login &may change before bet is accepted</span>
      </div>
    )
  }

  render() {
    return (
      <div className="runners has-text-centered">
        {this.renderHeader()}
        {this.renderRunnerInfo()}
        {this.renderRunnerFooter()}
      </div>
    );
  }
}

export default RaceContent;
