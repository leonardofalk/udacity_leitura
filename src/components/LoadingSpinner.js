import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Spin } from 'antd';

const LoadingSpinner = (props) => {
  const iconIndicator = (<Icon
    type={props.icon}
    spin
    style={{ fontSize: props.size, color: props.color }}
  />);

  return <Spin indicator={iconIndicator} />;
};

LoadingSpinner.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.string,
  size: PropTypes.number,
};

LoadingSpinner.defaultProps = {
  color: null,
  icon: 'loading',
  size: 24,
};

export default LoadingSpinner;
