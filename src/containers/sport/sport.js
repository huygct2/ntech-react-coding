import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import Widget from '../../components/widget/widget';
import SportContent from '../../components/sport/content';
import actions from '../../redux/sport/actions'
import arsenalImg from '../../images/arsenal.jpg'

import './style.scss'

const {
  getLatestSport
} = actions;

class Sport extends Component {
  componentWillMount() {
    this.props.getLatestSport()
  }

  render() {
    const { sport } = this.props;

    const content = (
      <SportContent/>
    )

    console.log('sport: ', sport)

    return (
      <div className="containers-wrapper">
        <Widget
          typeBet={'Soccer'}
          // time={moment()}
          time="1d 12h"
          content={content}
          imageUrl={arsenalImg}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { sport } = state.Sport.toJS();
  return {
    sport
  };
}
export default connect(mapStateToProps, {
  getLatestSport
})(Sport);
