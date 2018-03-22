/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingSpinner from '../../components/LoadingSpinner';

storiesOf('LoadingSpinner', LoadingSpinner)
  .add('to Storybook', () => <LoadingSpinner />);
