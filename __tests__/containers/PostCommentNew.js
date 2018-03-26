import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'

import PostCommentNew from '../../src/containers/PostCommentNew';

const createStore = configureStore();

describe('PostCommentNew container', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostCommentNew store={createStore()} />).dive();;

    expect(wrapper.contains(<p>Container Generated Automatically</p>)).toEqual(true);
  });
});
