import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InfoBar from './';

const right = () => { return "UP NEXT: THIS WEEKS HIGHLIGHTS" };

storiesOf('Components/InfoBar', module)
  .add('default', () => <InfoBar right={right} />);