import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Row, Col } from 'antd';

import styles from './styles/PostNew';
import PostForm from '../components/PostForm';
import CategoryActions from '../redux/reducers/Category';
import PostCreateActions from '../redux/reducers/PostCreate';

class PostNew extends Component {
  state = {}

  componentDidMount = () => {
    const { fetchCategories } = this.props;

    fetchCategories();
  }

  render = () => {
    const { categories } = this.state;
    const { createPost } = this.props;

    return (
      <Row>
        <Col>
          <h2 style={styles.title}>New Post</h2>
          <PostForm
            editMode={false}
            categories={categories}
            createPost={createPost}
            updatePost={() => null}
          />
        </Col>
      </Row>
    );
  }
}

PostNew.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
};

PostNew.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  categories: _.has(state, 'category.payload.categories') ? state.category.payload.categories : [],
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(CategoryActions.categoryRequest()),
  createPost: props => dispatch(PostCreateActions.postCreateRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
