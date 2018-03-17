---
to: src/components/<%= NAME = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles/<%= NAME %>';

class <%= NAME %> extends Component {
  render = () => (
    <p>Component Generated Automatically</p>
  )
};

<%= NAME %>.propTypes = {
  // ...
};

<%= NAME %>.defaultProps = {
  // ...
};

export default <%= NAME %>;
