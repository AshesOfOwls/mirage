import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GamingOverlay from './';
import Canvas from '../../components/canvas';

storiesOf('Overlays/Gaming', module)
  .add('default', () => (
    <Canvas full>
      <GamingOverlay />
    </Canvas>
  ));