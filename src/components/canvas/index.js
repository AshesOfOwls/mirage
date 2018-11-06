import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.css';

class Canvas extends Component {
  renderChildren() {
    return (
      <div className={classnames('canvas')}>
        <div className={classnames('canvas-inner')}>
          { this.props.children }
        </div>
      </div>
    );
  }
    
  render() {
    return this.renderChildren();
  }
}

export default Canvas;