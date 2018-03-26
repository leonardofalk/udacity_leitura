import React from 'react'
import { shallow } from 'enzyme'

import Comment from '../../src/components/Comment';

describe('comment component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<Comment />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
