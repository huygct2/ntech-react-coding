import React, { Component } from 'react';
import { connect } from "react-redux";

import Widget from '../../components/widget/widget';
import SportContent from '../../components/sport/sportContent';
import actions from '../../redux/sport/actions';
import arsenalImg from '../../images/arsenal.jpg';
import { timeInterval } from '../../constants/config';

const {
  getLatestSport
} = actions;

class Sport extends Component {
  componentDidMount() {
    this.props.getLatestSport()    
    this.fetchLatestSportInterval = window.setInterval(
      this.props.getLatestSport.bind(this), timeInterval * 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.fetchLatestSportInterval)
  }

  render() {
    const { sport } = this.props;
    
    const content = (
      <SportContent
        marketLength={sport.marketLength}
        propositions={sport.propositions} />
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
