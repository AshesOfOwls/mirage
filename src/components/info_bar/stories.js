import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InfoBar from './';

storiesOf('Components/InfoBar', module)
  .add('default', () => <InfoBar />);