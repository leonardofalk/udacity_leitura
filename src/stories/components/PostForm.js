/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import PostForm from '../../components/PostForm';

storiesOf('PostForm', PostForm)
  .add('to Storybook', () => <PostForm />);
