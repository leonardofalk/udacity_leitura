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
import VoteActions from '../redux/reducers/Vote';
import DeletePostActions from '../redux/reducers/DeletePost';

class Home extends Component {
  state = {
    categorySelected: null,
  }

  componentDidMount = () => {
    const { fetchPosts, fetchCategories } = this.props;

    fetchPosts();
    fetchCategories();
  }

  onChangeFilter = categorySelected => this.setState({ categorySelected })

  _renderPosts = () => {
    const { categorySelected } = this.state;
    const {
      posts, onVoteUp, onVoteDown, deletePost,
    } = this.props;

    const filteredPosts = (_.isEmpty(categorySelected)
      ? posts
      : posts.filter(post => (
        post.category === categorySelected
      )));

    return filteredPosts.map(postProps => (
      <PostCard
        {...postProps}
        onVoteUp={onVoteUp(postProps)}
        onVoteDown={onVoteDown(postProps)}
        deletePost={deletePost(postProps)}
      />
    ));
  }

  render = () => {
    const { categories, posts } = this.state;

    if (_.isEmpty(posts)) {
      return (
        <div style={styles.loadingSpinner}>
          <LoadingSpinner />
        </div>
      );
    }

    return (
      <Row>
        <Col>
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
  categories: _.get(state, 'category.payload.categories', []),
  posts: _.get(state, 'post.payload.posts', []),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(PostActions.postRequest()),
  fetchCategories: () => dispatch(CategoryActions.categoryRequest()),
  onVoteUp: ({ id }) => () => dispatch(VoteActions.voteRequest({ id, option: 'upVote' })),
  onVoteDown: ({ id }) => () => dispatch(VoteActions.voteRequest({ id, option: 'downVote' })),
  deletePost: ({ id }) => () => dispatch(DeletePostActions.deletePostRequest({ id })),
});

Home.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  posts: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  categories: [],
  posts: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
