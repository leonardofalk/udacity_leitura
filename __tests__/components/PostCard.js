import React from 'react'
import { shallow } from 'enzyme'

import PostCard from '../../src/components/PostCard';

describe('PostCard component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostCard />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
