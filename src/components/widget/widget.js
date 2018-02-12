import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logoImg from '../../images/logo-ball.png';
import Timer from '../timer/timer';

import './style.scss';

class Widget extends Component {
  render() {
    const { imageUrl, content, typeBet, time, title, description } = this.props;

    return (
      <div className="card widget">
        <div className="card-image">
          <div className="filter-black"></div>
          <figure className="image is-2by1">
            <img src={imageUrl} alt="background" />
          </figure>
          {
            typeBet ? <div className="box-left has-text-weight-bold is-uppercase">
              <img src={logoImg} alt="logo sport" />
              <span>{typeBet}</span>
            </div> : null
          }
          <div className="box-right has-text-white has-text-weight-bold">
            <Timer time={time} />
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
  title: '',
  typeBet: ''
};

Widget.propTypes = {
  typeBet: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default Widget
