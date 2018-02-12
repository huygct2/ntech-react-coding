import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Widget from '../../components/widget/widget';
import actions from '../../redux/races/actions';
import { timeInterval } from '../../constants/config';

import RaceContent from '../../components/races/raceContent';
import racingImg from '../../images/racing.jpg';

const {
  getLatestRace
} = actions;

class Races extends Component {
  componentDidMount() {
    this.props.getLatestRace();
    this.fetchtLatestRaceInterval = window.setInterval(
      this.props.getLatestRace.bind(this), timeInterval * 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.fetchtLatestRaceInterval);
  }

  render() {
    const { race = {} } = this.props;

    const content = (
      <RaceContent runners={race.runners} />
    );

    return (
      <div className="containers-wrapper">
        <Widget
          time={race.raceStartTime}
          content={content}
          title={race.raceName}
          imageUrl={racingImg}
        />
      </div>
    );
  }
}

Races.propTypes = {
  race: PropTypes.object,
  getLatestRace: PropTypes.func
};

function mapStateToProps(state) {
  const { race } = state.Race.toJS();
  return {
    race
  };
}
export default connect(mapStateToProps, {
  getLatestRace
})(Races);
