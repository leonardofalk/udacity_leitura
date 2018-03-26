import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Icon, Popconfirm, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles/Comment';

const PostCard = props => (
  <Card
    style={styles.container}
    actions={[
      <Tooltip title="Edit" placement="bottom">
        <Link to={`/comments/${props.id}/edit`}>
          <Icon type="edit" />
        </Link>
      </Tooltip>,
      <Tooltip title="Delete" placement="bottom">
        <Popconfirm title="Are you sure?" okText="Yes" cancelText="No" onConfirm={props.deleteComment}>
          <Icon type="delete" />
        </Popconfirm>
      </Tooltip>,
      <Tooltip title="Vote Up" placement="bottom">
        <Icon type="like-o" onClick={props.onVoteUp} />
      </Tooltip>,
      <Tooltip title="Vote Down" placement="bottom">
        <Icon type="like-o" style={styles.actionVoteDown} onClick={props.onVoteDown} />
      </Tooltip>,
    ]}
  >
    <Badge
      showZero
      count={parseInt(props.likeCount, 10)}
      style={styles.badgeBig}
    />
    <Card.Meta
      title={<span>by {props.author}</span>}
      description={props.body}
      style={styles.metaCard}
    />
  </Card>
);

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  likeCount: PropTypes.number,
};

PostCard.defaultProps = {
  likeCount: 0,
};

export default PostCard;
