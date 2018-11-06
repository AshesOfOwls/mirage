import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InfoBar from './';
import PlayingToken from '../playing_token';

const left = () => {
  return (
    <PlayingToken
      headerText="Playing"
      bodyText="Call of Duty: Black Ops 4"
    />
  );
};

const right = () => { return "UP NEXT: THIS WEEKS HIGHLIGHTS" };

storiesOf('Components/InfoBar', module)
  .add('default', () => <InfoBar right={right} left={left} />);