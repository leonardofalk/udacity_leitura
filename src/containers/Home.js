import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { Button, Col, Row } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import styles from './styles/Home';
import LoadingSpinner from '../components/LoadingSpinner';
import PostCard from '../components/PostCard';
import PostFilter from '../components/PostFilter';
import PostActions from '../redux/reducers/Post';
import VoteActions from '../redux/reducers/Vote';
import DeletePostActions from '../redux/reducers/DeletePost';

class Home extends Component {
  state = {
    orderBy: 'likeCount',
  }

  componentDidMount = () => {
    const { fetchPosts } = this.props;

    fetchPosts();
  }

  onChangeSort = (orderBy = 'likeCount') => this.setState({ orderBy });

  _renderPosts = () => {
    const { match, posts, orderBy } = this.state;
    const { onVoteUp, onVoteDown, deletePost } = this.props;
    const categorySelected = match.params.category;

    const filteredPosts = _.sortBy((_.isEmpty(categorySelected)
      ? posts
      : posts.filter(post => (
        post.category === categorySelected
      ))), [orderBy]);

    return _.reverse(filteredPosts).map(postProps => (
      <PostCard
        {...postProps}
        onVoteUp={onVoteUp(postProps)}
        onVoteDown={onVoteDown(postProps)}
        deletePost={deletePost(postProps)}
      />
    ));
  }

  render = () => {
    const { posts, fetching } = this.state;

    if (fetching) {
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
              <PostFilter onChange={this.onChangeSort} />
              <Link to="/posts/new">
                <Button type="dashed" style={styles.newPostButton}>
                New Post
                </Button>
              </Link>
            </Col>
          </Row>
          {
            _.isEmpty(posts)
            ? (
              <h3 style={styles.noPostsMessage}>There are no posts to show.</h3>
              )
            : (
              <Masonry style={styles.masonry}>
                {this._renderPosts()}
              </Masonry>
            )
          }
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  posts: _.get(state, 'post.payload.posts', []),
  fetching: _.get(state, 'post.fetching', false),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(PostActions.postRequest()),
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
