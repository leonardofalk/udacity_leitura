import React from 'react'
import { shallow } from 'enzyme'

import NotFound from '../../src/components/NotFound';

describe('NotFound component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
