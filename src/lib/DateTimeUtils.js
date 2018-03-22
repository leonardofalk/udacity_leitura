/* eslint-disable import/prefer-default-export */

import moment from 'moment';

const timeAgoInWords = date => moment(date).fromNow();

export {
  timeAgoInWords,
};
