import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Canvas from './';

storiesOf('Components/Canvas', module)
  .add('default', () => <Canvas size={720} />);