import React from 'react'
import PropTypes from 'prop-types';

import RelativeTime from '../../utils/RelativeTime';

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    const { time, timeNow } = this.props;
    this.state = {
      amountTime: RelativeTime.toParts(time, timeNow)
    }
  }

  componentDidMount() {
    this.intervailID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervailID);
  }

  tick() {
    this.setState({
      amountTime: RelativeTime.toParts(this.props.time)
    })
  }

  render() {
    const { amountTime } = this.state

    return <time>
      Starts in {amountTime.map((time, i) => <span key={`line-${i}`}>
        <span className="amount-label">{time.amount}</span>
        <span className="unit-label">{time.unit} </span>
      </span>
      )}
    </time>
  }
}

Timer.propTypes = {
  time: PropTypes.any
}
