import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SceneItem from './';

import Image from '../image';

const imageStyle = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

storiesOf('Components/SceneItem', module)
  .add('default', () => (
    <SceneItem
      component={Image}
      styles={imageStyle}
    />
  ));