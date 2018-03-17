---
to: __tests__/components/<%= NAME = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import React from 'react'
import { shallow } from 'enzyme'

import <%= NAME %> from '../../src/components/<%= NAME %>';

describe('<%= name %> component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<<%= NAME %> />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
