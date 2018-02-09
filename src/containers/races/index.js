import React, { Component } from 'react';
import { connect } from "react-redux";

import './style.scss'

class Races extends Component {
  render() {
    return (
      <div className="race">
        Races
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loading } = state.Race.toJS();
  console.log(loading)
  return {

  };
}
export default connect(mapStateToProps, {
  
})(Races);
