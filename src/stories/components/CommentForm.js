/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import CommentForm from '../../components/CommentForm';

storiesOf('CommentForm', CommentForm)
  .add('to Storybook', () => <CommentForm />);
