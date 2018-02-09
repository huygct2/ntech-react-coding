import React, { Component } from 'react';
import { connect } from "react-redux";

class Races extends Component {
  render() {
    return (
      <div>
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

