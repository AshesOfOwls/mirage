import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.css';

class Canvas extends Component {
  get canvasStyle() {
    if (this.props.full) {
      return { width: 1920, height: 1080 };
    }

    return {};
  }

  renderChildren() {
    return (
      <div className={classnames('canvas')} style={this.canvasStyle}>
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