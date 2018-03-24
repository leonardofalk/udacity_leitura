import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Icon, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles/PostCard';
import { truncate } from '../lib/StringUtils';

const PostCard = props => (
  <Card
    loading={props.loading}
    style={props.bigMode ? styles.cardBig : styles.cardSmall}
    actions={[
      <Link to={`/posts/${props.id}/edit`}>
        <Icon type="edit" />
      </Link>,
      <Popconfirm title="Are you sure?" okText="Yes" cancelText="No" onConfirm={props.deletePost}>
        <Icon type="delete" />
      </Popconfirm>,
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
    <Link to={`/posts/${props.id}`}>
      <Card.Meta
        title={<b>{props.title}</b>}
        description={props.bigMode ? props.description : truncate(props.description, 200)}
        style={styles.metaCard}
      />
    </Link>
  </Card>
);

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  likeCount: PropTypes.number,
  commentCount: PropTypes.number,
  bigMode: PropTypes.bool,
};

PostCard.defaultProps = {
  loading: false,
  likeCount: 0,
  commentCount: 0,
  bigMode: false,
};

export default PostCard;
