import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import Widget from '../../components/widget';
import SportContent from '../../components/sport/content';

import './style.scss'

class Sport extends Component {
  render() {
    const {  } = this.props;

    const content = (
      <SportContent/>
    )

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
  const { loading } = state.Sport.toJS();
  return {

  };
}
export default connect(mapStateToProps, {
  
})(Sport);
