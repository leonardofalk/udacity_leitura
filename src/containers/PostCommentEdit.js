import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Row, Col } from 'antd';

import styles from './styles/PostCommentEdit';
import CommentForm from '../components/CommentForm';
import CommentUpdateActions from '../redux/reducers/CommentUpdate';
import FetchCommentActions from '../redux/reducers/FetchComment';

class PostCommentEdit extends Component {
  state = {}

  componentDidMount = () => {
    const { fetchComment, match } = this.props;

    fetchComment(match.params);
  }

  render = () => {
    const { updateComment, match } = this.props;
    const { comment } = this.state;

    return (
      <Row>
        <Col>
          <h2 style={styles.title}>Edit Comment</h2>
          <CommentForm
            editMode
            id={match.params.id}
            body={comment.body}
            author={comment.author}
            createComment={() => null}
            updateComment={updateComment}
          />
        </Col>
      </Row>
    );
  }
}

PostCommentEdit.propTypes = {
  updateComment: PropTypes.func.isRequired,
  fetchComment: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

PostCommentEdit.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  created: _.get(state, 'commentUpdate.payload.timestamp', 0) > 0,
  comment: _.get(state, 'fetchComment.payload.comment', {}),
});

const mapDispatchToProps = dispatch => ({
  updateComment: props => dispatch(CommentUpdateActions.commentUpdateRequest(props)),
  fetchComment: props => dispatch(FetchCommentActions.fetchCommentRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentEdit);
