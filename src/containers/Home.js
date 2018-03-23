import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { Button, Col, Row } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import styles from './styles/Home';
import LoadingSpinner from '../components/LoadingSpinner';
import PostFilter from '../components/PostFilter';
import PostCard from '../components/PostCard';
import PostActions from '../redux/reducers/Post';
import CategoryActions from '../redux/reducers/Category';

class Home extends Component {
  state = {
    categorySelected: null,
  }

  componentDidMount = () => {
    const { initialized } = this.state;
    const { fetchPosts, fetchCategories } = this.props;

    if (!initialized) {
      fetchPosts();
      fetchCategories();
      this.setState({ initialized: true });
    }
  }

  onChangeFilter = categorySelected => this.setState({ categorySelected })

  _renderPosts = () => {
    const { categorySelected } = this.state;
    const { posts } = this.props;
    const filteredPosts = (_.isEmpty(categorySelected)
      ? posts
      : posts.filter(post => (
        post.category === categorySelected
      )));

    return filteredPosts.map(postProps => <PostCard {...postProps} />);
  }

  render = () => {
    const { categories } = this.props;
    const { initialized } = this.state;

    if (!initialized) {
      return (
        <div style={styles.loadingSpinner}>
          <LoadingSpinner />
        </div>
      );
    }

    return (
      <Row>
        <Col xl={12}>
          <Row style={styles.row}>
            <Col>
              <PostFilter categories={categories} onChange={this.onChangeFilter} />
              <Link to="/posts/new">
                <Button type="dashed" style={styles.newPostButton}>
                New Post
                </Button>
              </Link>
            </Col>
          </Row>
          <Masonry style={styles.masonry}>
            {this._renderPosts()}
          </Masonry>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  categories: _.has(state, 'category.payload.categories') ? state.category.payload.categories : [],
  posts: _.has(state, 'post.payload.posts') ? state.post.payload.posts : [],
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(PostActions.postRequest()),
  fetchCategories: () => dispatch(CategoryActions.categoryRequest()),
});

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  posts: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  categories: [],
  posts: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
