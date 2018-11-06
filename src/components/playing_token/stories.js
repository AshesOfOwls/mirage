import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import codbo4 from './assets/codbo4.png';

import PlayingToken from './';

storiesOf('Components/PlayingToken', module)
  .add('default', () => (
    <PlayingToken
      headerText="Playing"
      bodyText="Call of Duty: Black Ops 4"
      image={codbo4}
    />
  ));