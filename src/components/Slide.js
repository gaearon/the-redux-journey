import React, { Component } from 'react';
import './Slide.less';

export default class Slide extends Component {
  render() {
    return (
      <div className='Slide'>
        <div className='Slide-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
