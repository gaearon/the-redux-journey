import React, { Component } from 'react';
import './Image.less';

export default class Image extends Component {
  render() {
    return (
      <img className='Image' {...this.props} />
    );
  }
}
