import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'

import PostNew from '../../src/containers/PostNew';

const createStore = configureStore();

describe('PostNew container', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostNew store={createStore()} />).dive();;

    expect(wrapper.contains(<p>Container Generated Automatically</p>)).toEqual(true);
  });
});
