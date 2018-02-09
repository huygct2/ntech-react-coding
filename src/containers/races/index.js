import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import Widget from '../../components/widget';
import actions from '../../redux/races/actions'

import RaceContent from '../../components/races/content';

import './style.scss'

const {
  getLatestRace
} = actions;

class Races extends Component {
  componentWillMount() {
    this.props.getLatestRace()
  }

  render() {
    const { race } = this.props;

    const content = (
      <RaceContent />
    )
    console.log(race)

    return (
      <div className="race">
        <Widget
          typeBet={'Race'}
          time={moment()}
          content={content}
          imageUrl={'https://bulma.io/images/placeholders/1280x960.png'}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { race } = state.Race.toJS();
  return {
    race
  };
}
export default connect(mapStateToProps, {
  getLatestRace
})(Races);
