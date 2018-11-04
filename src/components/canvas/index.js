import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.css';

class Canvas extends Component {
    get sizeClass() {
        return `size-${this.props.size}`;
    }
    
    renderChildren() {
        return (
            <div className={classnames('canvas', this.sizeClass)}>
                { this.props.children }
            </div>
        );
    }
    
    render() {
        return this.renderChildren();
    }
}

Canvas.defaultProps = {
    size: 360,
};

export default Canvas;