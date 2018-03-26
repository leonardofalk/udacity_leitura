/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import NotFound from '../../components/NotFound';

storiesOf('NotFound', NotFound)
  .add('to Storybook', () => <NotFound />);
