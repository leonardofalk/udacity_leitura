import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles/PostCard';
import { truncate } from '../lib/StringUtils';

const PostCard = props => (
  <Card
    loading={props.loading}
    style={styles.card}
    actions={[
      <Link to={`/posts/${props.id}/edit`}>
        <Icon type="edit" />
      </Link>,
      <Icon type="like-o" onClick={props.onVoteUp} />,
      <Icon type="like-o" style={styles.actionVoteDown} onClick={props.onVoteDown} />,
      <Link to={`/posts/${props.id}/comments/new`}>
        <Icon type="message" style={styles.actions}>
          {props.commentCount}
        </Icon>
      </Link>,
      ]}
  >
    <Badge count={parseInt(props.likeCount, 10)} style={styles.badge} showZero />
    <Card.Meta
      title={props.title}
      description={truncate(props.description, 200)}
      style={styles.metaCard}
    />
  </Card>
);

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  likeCount: PropTypes.number,
  commentCount: PropTypes.number,
};

PostCard.defaultProps = {
  loading: false,
  likeCount: 0,
  commentCount: 0,
};

export default PostCard;
