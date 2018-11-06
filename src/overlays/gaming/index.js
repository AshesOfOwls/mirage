import React, { Component } from 'react';

import Image from '../../components/image';
import SceneItem from '../../components/scene_item';
import InfoBar from '../../components/info_bar';
import PlayingToken from '../../components/playing_token';

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
const left = () => {
  return (
    <PlayingToken
      headerText="Playing"
      bodyText="Call of Duty: Black Ops 4"
    />
  );
};

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
          left={left}
        />
      </div>
    );
  }
}

export default GamingOverlay;