import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RelativeTime from '../../utils/RelativeTime';

import './style.scss'

class Widget extends Component {
  render() {
    const { imageUrl, content, typeBet, time, title, description } = this.props;
    const amountTime = RelativeTime.toParts(time)
    console.log(amountTime)


    return (
      <div className="card widget">
        <div className="card-image">
          <div className="filter-black"></div>
          <figure className="image is-2by1">
            <img src={imageUrl} alt="Placeholder image" />
          </figure>
          {typeBet.toLowerCase() !== 'race'
            ? <div className="box-left has-text-weight-bold is-uppercase">
              <img src="http://moziru.com/images/logo-clipart-soccer-4.png" alt="logo sport" />
              <span>{typeBet}</span>
            </div>
            : null
          }
          <div className="box-right has-text-white has-text-weight-bold">
            <span>Starts in {amountTime.map((time, i) => <span key={`line-${i}`}>
              <span className="amount-label">{time.amount}</span>
              <span className="unit-label">{time.unit}</span>
            </span>
            )}</span>
          </div>
          <div className="content has-text-white">
            <h2 className="content__title has-text-weight-bold is-uppercase">{title}</h2>
            {typeBet.toLowerCase() !== 'race'
              ? <span className="content__description has-text-weight-semibold">{description}</span>
              : null
            }
          </div>
        </div>
        <div className="card-content">
          {content}
        </div>
      </div>
    );
  }
}

Widget.defaultProps = {
  typeBet: '',
  time: '',
  imageUrl: '',
  content: <div />,
  description: 'Arsenal are without an away win in 5 matches',
  title: 'EPL'
};

Widget.propTypes = {

}


export default Widget
