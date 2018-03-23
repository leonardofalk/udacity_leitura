/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import PostFilter from '../../components/PostFilter';

storiesOf('PostFilter', PostFilter)
  .add('to Storybook', () => <PostFilter />);
