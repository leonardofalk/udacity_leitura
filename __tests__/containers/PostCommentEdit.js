import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'

import PostCommentEdit from '../../src/containers/PostCommentEdit';

const createStore = configureStore();

describe('PostCommentEdit container', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostCommentEdit store={createStore()} />).dive();;

    expect(wrapper.contains(<p>Container Generated Automatically</p>)).toEqual(true);
  });
});
