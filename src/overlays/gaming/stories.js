import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GamingOverlay from './';

storiesOf('Overlays/Gaming', module)
  .add('default', () => <GamingOverlay />);