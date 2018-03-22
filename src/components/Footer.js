import React from 'react';
import { Layout, Divider } from 'antd';

import styles from './styles/Footer';

const Footer = props => (
  <Layout.Footer {...props} style={styles.footer}>
    <Divider />
    <p style={styles.content}>Udacity React Nanodegree ©2018</p>
    <p style={styles.content}>Created by Leonardo Falk</p>
  </Layout.Footer>
);

export default Footer;
