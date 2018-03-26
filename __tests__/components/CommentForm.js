import React from 'react'
import { shallow } from 'enzyme'

import CommentForm from '../../src/components/CommentForm';

describe('CommentForm component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<CommentForm />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
