import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.css';

class Image extends Component {
  renderImage() {
    return (
      <div className={classnames('playingToken-image')}>
        <img
          src={this.props.image}
        />
      </div>
    )
  }

  renderDetails() {
    return (
      <div className={classnames('playingToken-details')}>
        <div className={classnames('playingToken-details-header')}>
          { this.props.headerText }
        </div>
        <div className={classnames('playingToken-details-body')}>
          { this.props.bodyText }
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div className={classnames('playingToken')}>
        { this.renderImage() }
        { this.renderDetails() }
      </div>
    );
  }
}

Image.defaultProps = {
  bodyText: "Body Text",
  headerText: "Header Text",
}

export default Image;