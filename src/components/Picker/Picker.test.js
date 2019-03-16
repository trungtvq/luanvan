import React from 'react';
import Picker from './Picker';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<Picker />);
});
