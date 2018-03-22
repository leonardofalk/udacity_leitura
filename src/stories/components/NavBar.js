/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from '../../components/NavBar';

storiesOf('NavBar', NavBar)
  .add('to Storybook', () => <NavBar />);
