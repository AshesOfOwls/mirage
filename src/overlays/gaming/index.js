import React, { Component } from 'react';

import Image from '../../components/image';
import SceneItem from '../../components/scene_item';
import InfoBar from '../../components/info_bar';

import shroudImage from './assets/codbo4_shroud_1.jpg';

const imageStyle = {
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
};

const infoBarStyle = {
  bottom: 0,
  right: 0,
  left: 0,
};

const right = () => { return "UP NEXT: THIS WEEKS HIGHLIGHTS" };

class GamingOverlay extends Component {
    render() {
        return (
            <div>
                <SceneItem
                    component={Image}
                    source={shroudImage}
                    styles={imageStyle}
                />
                <SceneItem
                    component={InfoBar}
                    source={shroudImage}
                    styles={infoBarStyle}
                    right={right}
                />
            </div>
        );
    }
}

export default GamingOverlay;