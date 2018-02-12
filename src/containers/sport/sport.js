import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import Widget from '../../components/widget/widget';
import SportContent from '../../components/sport/content';
import actions from '../../redux/sport/actions'
import arsenalImg from '../../images/arsenal.jpg'

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
