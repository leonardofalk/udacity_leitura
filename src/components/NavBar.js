import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Divider } from 'antd';

import styles from './styles/NavBar';
import Footer from '../components/Footer';

const NavBar = () => (
  <Layout.Sider width={300} style={styles.container}>
    <div style={styles.titleContainer}>
      <span style={styles.title}>UdaciBlog</span>
    </div>
    <Divider dashed />
    <Menu mode="inline">
      <Menu.Item key="1">
        <Link to="/">
          <Icon type="home" />
          <span>Home</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/about">
          <Icon type="info" />
          <span>About</span>
        </Link>
      </Menu.Item>
    </Menu>
    <Footer />
  </Layout.Sider>
);

export default NavBar;
