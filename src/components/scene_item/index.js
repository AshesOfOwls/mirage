import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.css';

class SceneItem extends Component {
  get itemStyles() {
    return this.props.styles;
  }
  
  renderItem() {
    const SceneItemComponent = this.props.component;
    
    return (
      <div className={classnames('scene-item')} style={this.itemStyles}>
        <SceneItemComponent
          src={this.props.source}
          className={classnames('SceneItem')}
          {...this.props}
        />
      </div>
    )
  }
  
  render() {
    return this.renderItem();
  }
}

SceneItem.defaultProps = {
  styles: {},
};

export default SceneItem;