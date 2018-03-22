import React from 'react'
import { shallow } from 'enzyme'

import LoadingSpinner from '../../src/components/LoadingSpinner';

describe('LoadingSpinner component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<LoadingSpinner />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
