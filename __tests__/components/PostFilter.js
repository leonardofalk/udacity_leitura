import React from 'react'
import { shallow } from 'enzyme'

import PostFilter from '../../src/components/PostFilter';

describe('PostFilter component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostFilter />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
