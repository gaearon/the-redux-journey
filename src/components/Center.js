import React, { Component, PropTypes } from 'react';
import './Center.less';

export default class Center extends Component {
  static propTypes = {
    wide: PropTypes.bool,
    gradient: PropTypes.bool
  };

  render() {
    const { wide, alt, code, gradient, title } = this.props;
    return (
      <div title={title} className={
        `
          Center
          ${wide ? 'Center--wide' : ''}
          ${alt ? 'Center--alt' : ''}
          ${code ? 'Center--code' : ''}
          ${gradient ? 'Center--gradient' : ''}
        `
      }>
        <div className='Center-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
