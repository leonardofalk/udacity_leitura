import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'

import PostEdit from '../../src/containers/PostEdit';

const createStore = configureStore();

describe('PostEdit container', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostEdit store={createStore()} />).dive();;

    expect(wrapper.contains(<p>Container Generated Automatically</p>)).toEqual(true);
  });
});
