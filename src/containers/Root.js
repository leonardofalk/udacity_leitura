import React from 'react';
import { Layout } from 'antd';

import Routes from '../config/routes';
import NavBar from '../components/NavBar';

import styles from './styles/Root';

const Root = () => (
  <Layout>
    <NavBar />
    <Layout>
      <Layout.Content style={styles.container}>
        <Routes />
      </Layout.Content>
    </Layout>
  </Layout>
);

export default Root;
