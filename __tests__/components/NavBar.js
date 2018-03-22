import React from 'react'
import { shallow } from 'enzyme'

import NavBar from '../../src/components/NavBar';

describe('NavBar component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
