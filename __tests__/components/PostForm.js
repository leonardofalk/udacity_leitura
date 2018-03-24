import React from 'react'
import { shallow } from 'enzyme'

import PostForm from '../../src/components/PostForm';

describe('PostForm component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<PostForm />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
