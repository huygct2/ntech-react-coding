import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo-ball.png'
import RelativeTime from '../../utils/RelativeTime';

import './style.scss'

class Widget extends Component {
  render() {
    const { imageUrl, content, typeBet, time, title, description } = this.props;
    const amountTime = RelativeTime.toParts(time);

    return (
      <div className="card widget">
        <div className="card-image">
          <div className="filter-black"></div>
          <figure className="image is-2by1">
            <img src={imageUrl} alt="Placeholder image" />
          </figure>
          {
            typeBet ? <div className="box-left has-text-weight-bold is-uppercase">
              <img src={logoImg} alt="logo sport" />
              <span>{typeBet}</span>
            </div> : null
          }
          <div className="box-right has-text-white has-text-weight-bold">
            <span>Starts in {amountTime.map((time, i) => <span key={`line-${i}`}>
              <span className="amount-label">{time.amount}</span>
              <span className="unit-label">{time.unit} </span>
            </span>
            )}</span>
          </div>
          <div className="content has-text-white">
            <h2 className="content__title has-text-weight-bold is-uppercase">{title}</h2>
            <span className="content__description has-text-weight-semibold">{description}</span>
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
  imageUrl: '',
  content: <div />,
  description: '',
  title: 'EPL',
  typeBet: ''
};

Widget.propTypes = {
  typeBet: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
}

export default Widget
