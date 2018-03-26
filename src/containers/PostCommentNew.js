import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Row, Col } from 'antd';

import styles from './styles/PostCommentNew';
import CommentForm from '../components/CommentForm';
import CommentCreateActions from '../redux/reducers/CommentCreate';

class PostCommentNew extends Component {
  state = {}

  render = () => {
    const { createComment, match } = this.props;

    return (
      <Row>
        <Col>
          <h2 style={styles.title}>New Comment</h2>
          <CommentForm
            parentId={match.params.id}
            editMode={false}
            createComment={createComment}
            updateComment={() => null}
          />
        </Col>
      </Row>
    );
  }
}

PostCommentNew.propTypes = {
  createComment: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

PostCommentNew.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  created: _.get(state, 'commentCreate.payload.timestamp', 0) > 0,
});

const mapDispatchToProps = dispatch => ({
  createComment: props => dispatch(CommentCreateActions.commentCreateRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentNew);
