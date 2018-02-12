import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import Widget from '../../components/widget/widget';
import actions from '../../redux/races/actions'

import RaceContent from '../../components/races/content';

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
      <div className="containers-wrapper">
        <Widget
          typeBet={'Race'}
          // time={moment()}
          time="1d 12h"
          content={content}
          imageUrl={'http://livedoor.blogimg.jp/matomete_yaroukan/imgs/b/9/b922ec37.jpg'}
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
