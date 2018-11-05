import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import shroudImage from './assets/codbo4_shroud_1.jpg';

import GamingOverlay from './';
import Canvas from '../../components/canvas';
import Image from '../../components/image';
import InfoBar from '../../components/info_bar';

storiesOf('Overlays/Gaming', module)
  .add('default', () => (
    <Canvas size={360}>
        <GamingOverlay />
        <Image source={shroudImage} />
        <InfoBar />
    </Canvas>
    ));