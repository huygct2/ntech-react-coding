import React, { Component } from 'react';
import { connect } from "react-redux";

class Sport extends Component {
  render() {
    return (
      <div className="sport">
        sport
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
