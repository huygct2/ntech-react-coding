import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss'

class Widget extends Component {
  render() {
    const { imageUrl, content, typeBet, time, title, description } = this.props;

    return (
      <div className="card widget">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageUrl} alt="Placeholder image" />
          </figure>
          <div className="box-left">
            {typeBet}
          </div>
          <div className="box-right">
            <span>{`Starts in ${time}`}</span>
          </div>
          <div className="content">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="description">
              <span>{title}</span>
            </div>
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
  description: '',
  title: ''
};

Widget.propTypes = {

}


export default Widget
