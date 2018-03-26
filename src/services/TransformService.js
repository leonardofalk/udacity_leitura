import { isEmpty } from 'lodash';
import { capitalize } from '../lib/StringUtils';
import { timeAgoInWords } from '../lib/DateTimeUtils';

const mapApiPostToProps = (attrs) => {
  if (isEmpty(attrs)) {
    throw { error: 'Empty map api post to props' };
  }

  return {
    author: attrs.author,
    category: attrs.category,
    commentCount: attrs.commentCount,
    deleted: attrs.deleted,
    description: attrs.body,
    id: attrs.id,
    key: attrs.id,
    likeCount: attrs.voteScore,
    timestamp: attrs.timestamp,
    timeAgoInWords: timeAgoInWords(new Date(attrs.timestamp)),
    title: attrs.title,
  };
};

const mapApiCategoryToProps = attrs => ({
  id: attrs.path,
  key: attrs.path,
  name: capitalize(attrs.name),
});

export {
  mapApiPostToProps,
  mapApiCategoryToProps,
};
