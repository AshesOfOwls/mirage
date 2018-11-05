import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.css';

class InfoBar extends Component {
    renderInfoBar() {
        return (
            <div className={classnames('info-bar')}>
                This is a infobar
            </div>
        )
    }
    
    render() {
        return this.renderInfoBar();
    }
}

export default InfoBar;