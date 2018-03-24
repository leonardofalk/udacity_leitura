import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Row, Col } from 'antd';

import styles from './styles/PostEdit';
import PostForm from '../components/PostForm';
import CategoryActions from '../redux/reducers/Category';
import PostUpdateActions from '../redux/reducers/PostUpdate';
import PostFetchActions from '../redux/reducers/PostFetch';

class PostEdit extends Component {
  state = {}

  componentDidMount = () => {
    const { fetchCategories, fetchPost, match } = this.props;

    fetchCategories();
    fetchPost({ id: match.params.id });
  }

  render = () => {
    const { categories, post } = this.state;
    const { updatePost } = this.props;

    return (
      <Row>
        <Col>
          <h2 style={styles.title}>Edit Post</h2>
          <PostForm
            editMode
            categories={categories}
            createPost={() => null}
            updatePost={updatePost}
            author={post.author}
            title={post.title}
            body={post.description}
            category={post.category}
            id={post.id}
          />
        </Col>
      </Row>
    );
  }
}

PostEdit.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  fetchPost: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

PostEdit.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  categories: _.get(state, 'category.payload.categories', []),
  post: _.get(state, 'postFetch.payload.post', {}),
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(CategoryActions.categoryRequest()),
  updatePost: props => dispatch(PostUpdateActions.postUpdateRequest(props)),
  fetchPost: ({ id }) => dispatch(PostFetchActions.postFetchRequest({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
