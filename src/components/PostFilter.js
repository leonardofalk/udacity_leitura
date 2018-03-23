import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import styles from './styles/PostFilter';
import { capitalize } from '../lib/StringUtils';

const PostFilter = ({ categories, ...rest }) => (
  <Select
    {...rest}
    style={styles.select}
    placeholder="Filter by category..."
    allowClear
  >
    {categories.map(option => (
      <Select.Option key={option.key} value={option.id}>
        {capitalize(option.name)}
      </Select.Option>
    ))}
  </Select>
);

PostFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostFilter;
