import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../../src/components/Footer';

describe('Footer component', () => {
  it('is a generated test', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.contains(<p>Component Generated Automatically</p>)).toEqual(true);
  });
});
