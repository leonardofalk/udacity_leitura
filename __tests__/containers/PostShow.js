import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'

import PostShow from '../../src/containers/PostShow';

const createStore = configureStore();

describe('PostShow container', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostShow store={createStore()} />).dive();;

    expect(wrapper.contains(<p>Container Generated Automatically</p>)).toEqual(true);
  });
});
