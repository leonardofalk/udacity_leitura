---
to: __tests__/containers/<%= NAME = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'

import <%= NAME %> from '../../src/containers/<%= NAME %>';

const createStore = configureStore();

describe('<%= name %> container', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<<%= NAME %> store={createStore()} />).dive();;

    expect(wrapper.contains(<p>Container Generated Automatically</p>)).toEqual(true);
  });
});
