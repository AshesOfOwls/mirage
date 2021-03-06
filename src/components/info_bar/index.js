import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.css';

class InfoBar extends Component {  
  renderInfoBar() {
    return (
      <div className={classnames('infobar')}>
        <div className={classnames('infobar-tab')}>
          { this.props.tab() }
        </div>
        <div className={classnames('infobar-pane', 'left')}>
          { this.props.left() }
        </div>
        <div className={classnames('infobar-pane', 'center')}>
          { this.props.center() }
        </div>
        <div className={classnames('infobar-pane', 'right')}>
          { this.props.right() }
        </div>
      </div>
    )
  }
  
  render() {
    return this.renderInfoBar();
  }
}

InfoBar.defaultProps = {
  left: () => { return null; },
  center: () => { return null; },
  right: () => { return null; },
  tab: () => { return null; },
}

export default InfoBar;