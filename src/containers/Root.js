import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import Routes from '../config/routes';
import NavBar from '../components/NavBar';
import CategoryActions from '../redux/reducers/Category';
import styles from './styles/Root';

class Root extends Component {
  state = {
    categories: [],
  }

  componentDidMount = () => {
    this.props.fetchCategories();
  }

  render = () => (
    <Layout>
      <NavBar categories={this.state.categories} />
      <Layout>
        <Layout.Content style={styles.container}>
          <Routes />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

Root.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
};

/*
 * Aqui ficam sendo sincronizadas categorias retornadas
 * pelo fetchCategories, e adicionadas ao estado,
 * embora seja uma maneira preguiçosa e ineficaz de atualizar o estado
 * do Root, funciona bem para esse projeto.
 */
Root.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

/*
 * Embora haja possibilidade de escrever em forma de objeto,
 * é bom que todos tenham a mesma semântica para o bem
 * da manutenção do projeto.
 */
const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(CategoryActions.categoryRequest()),
});

const mapStateToProps = state => ({
  categories: _.get(state, 'category.payload.categories', []),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
