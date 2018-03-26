import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import styles from './styles/PostFilter';

const { Option } = Select;

const PostFilter = ({ categories, ...rest }) => (
  <Select
    {...rest}
    style={styles.select}
    placeholder="Sort by..."
    allowClear
  >
    <Option key="likeCount" value="likeCount">
      Vote Score
    </Option>
    <Option key="timestamp" value="timestamp">
      Date and Time
    </Option>
  </Select>
);

PostFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostFilter;
