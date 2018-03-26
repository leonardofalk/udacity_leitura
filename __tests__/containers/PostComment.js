import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'

import PostComment from '../../src/containers/PostComment';

const createStore = configureStore();

describe('PostComment container', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostComment store={createStore()} />).dive();;

    expect(wrapper.contains(<p>Container Generated Automatically</p>)).toEqual(true);
  });
});
