import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles/PostCard';
import { truncate } from '../lib/StringUtils';

const postCardOptions = props => ([
  <Icon type="like-o" style={styles.actions}>
    {props.likeCount}
  </Icon>,
  <Icon type="message" style={styles.actions}>
    {props.commentCount}
  </Icon>,
]);

const PostCard = props => (
  <Link to={`/posts/${props.id}`}>
    <Card
      loading={props.loading}
      style={styles.card}
      actions={postCardOptions(props)}
    >
      <Card.Meta
        title={props.title}
        description={truncate(props.description, 200)}
        style={styles.metaCard}
      />
    </Card>
  </Link>
);

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
