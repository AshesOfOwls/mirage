import React from 'react';

import { addDecorator } from '@storybook/react';

import './styles.css';
import '../src/styles.css';

addDecorator(story => story());
