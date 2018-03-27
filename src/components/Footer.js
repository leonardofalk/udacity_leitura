import React from 'react';
import { Layout, Divider, Icon } from 'antd';

import styles from './styles/Footer';

const Footer = props => (
  <Layout.Footer {...props} style={styles.footer}>
    <Divider />
    <p style={styles.content}>Udacity React Nanodegree ©2018</p>
    <p style={styles.content}>Created by <a href="https://github.com/leonardofalk" target="_blank" rel="noopener noreferrer">Leonardo Falk <Icon type="github" /></a></p>
  </Layout.Footer>
);

export default Footer;
