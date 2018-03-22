/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from '../../components/Footer';

storiesOf('Footer', Footer)
  .add('to Storybook', () => <Footer />);
