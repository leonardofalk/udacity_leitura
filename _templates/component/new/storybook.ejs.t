---
to: src/stories/components/<%= NAME = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import <%= NAME %> from '../../components/<%= NAME %>';

storiesOf('<%= NAME %>', <%= NAME %>)
  .add('to Storybook', () => <<%= NAME %> />);
