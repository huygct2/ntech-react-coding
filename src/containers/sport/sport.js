import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import Widget from '../../components/widget/widget';
import SportContent from '../../components/sport/content';
import actions from '../../redux/sport/actions'

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
      <SportContent propositions={sport.propositions}/>
    )

    return (
      <div className="containers-wrapper">
        <Widget
          typeBet={sport.sportName}
          time={sport.startTime}
          content={content}
          title={sport.competitionName}
          description={sport.name}
          imageUrl={'https://images.performgroup.com/di/library/GOAL/d0/a2/alexis-sanchez-mesut-ozil-arsenal_1duislpvg0rpe1mdkhh5r79wyf.jpg?t=1675016968&quality=90&w=1280'}
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
