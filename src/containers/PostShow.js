import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';

import styles from './styles/PostShow';
import LoadingSpinner from '../components/LoadingSpinner';
import PostCard from '../components/PostCard';
import Comment from '../components/Comment';
import PostFetchActions from '../redux/reducers/PostFetch';
import CategoryActions from '../redux/reducers/Category';
import VoteActions from '../redux/reducers/Vote';
import CommentVoteActions from '../redux/reducers/CommentVote';
import DeletePostActions from '../redux/reducers/DeletePost';

class PostShow extends Component {
  state = {}

  componentDidMount = () => {
    const { fetchPost, match } = this.props;

    fetchPost({ id: match.params.id });
  }

  render = () => {
    const { post } = this.state;
    const {
      onVoteUp, onVoteDown, deletePost, onCommentVoteUp, onCommentVoteDown,
    } = this.props;

    if (_.isEmpty(post)) {
      return (
        <div style={styles.loadingSpinner}>
          <LoadingSpinner />
        </div>
      );
    }

    return (
      <Row>
        <Col style={styles.row}>
          <PostCard
            {...post}
            onVoteUp={onVoteUp(post)}
            onVoteDown={onVoteDown(post)}
            deletePost={deletePost(post)}
            bigMode
          />
        </Col>
        <Col style={styles.comments}>
          <h3>Comments</h3>
          {_.isEmpty(post.comments)
            ? <span>There are no comments for now.</span>
            : post.comments.map((comment, key) => (
              <Comment
                {...comment}
                key={key}
                style={styles.comment}
                onVoteUp={onCommentVoteUp(comment)}
                onVoteDown={onCommentVoteDown(comment)}
                deleteComment={() => null}
              />
          ))}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  post: _.get(state, 'postFetch.payload.post', {}),
});

const mapDispatchToProps = dispatch => ({
  fetchPost: ({ id }) => dispatch(PostFetchActions.postFetchRequest(({ id }))),
  fetchCategories: () => dispatch(CategoryActions.categoryRequest()),
  onVoteUp: ({ id }) => () => dispatch(VoteActions.voteRequest({ id, option: 'upVote' })),
  onVoteDown: ({ id }) => () => dispatch(VoteActions.voteRequest({ id, option: 'downVote' })),
  onCommentVoteUp: ({ id }) => () => dispatch(CommentVoteActions.commentVoteRequest({ id, option: 'upVote' })),
  onCommentVoteDown: ({ id }) => () => dispatch(CommentVoteActions.commentVoteRequest({ id, option: 'downVote' })),
  deletePost: ({ id }) => () => dispatch(DeletePostActions.deletePostRequest({ id })),
});

PostShow.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

PostShow.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  onCommentVoteUp: PropTypes.func.isRequired,
  onCommentVoteDown: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
