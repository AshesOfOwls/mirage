import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.css';

class Image extends Component {
    renderImage() {
        return (
            <img
                src={this.props.source}
                className={classnames('image')}
            />
        )
    }
    
    render() {
        return this.renderImage();
    }
}

Image.defaultProps = {
    source: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
}

export default Image;