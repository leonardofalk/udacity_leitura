/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import PostCard from '../../components/PostCard';

storiesOf('PostCard', PostCard)
  .add('to Storybook', () => <PostCard />);
