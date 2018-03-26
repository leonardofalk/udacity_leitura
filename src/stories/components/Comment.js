/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Comment from '../../components/Comment';

storiesOf('Comment', Comment)
  .add('to Storybook', () => <Comment />);
