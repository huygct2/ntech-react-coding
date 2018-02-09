import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import Widget from '../../components/widget';
import SportContent from '../../components/sport/content';
import actions from '../../redux/sport/actions'

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
      <div className="sport">
        <Widget
          typeBet={'Football'}
          time={moment()}
          content={content}
          imageUrl={'https://bulma.io/images/placeholders/1280x960.png'}
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
