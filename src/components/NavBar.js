import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Divider } from 'antd';

import styles from './styles/NavBar';
import Footer from '../components/Footer';

const NavBar = props => (
  <Layout.Sider width={300} style={styles.container}>
    <div style={styles.titleContainer}>
      <span style={styles.title}>UdaciBlog</span>
    </div>
    <Divider dashed />
    <Menu mode="inline">
      <Menu.Item key="-1">
        <Link to="/">
          <Icon type="home" />
          <span>Home</span>
        </Link>
      </Menu.Item>

      {props.categories.map((category, key) => (
        <Menu.Item key={key}>
          <Link to={`/${category.id}`}>
            <Icon type="tag" />
            <span>{category.name}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
    <Footer />
  </Layout.Sider>
);

NavBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavBar;
