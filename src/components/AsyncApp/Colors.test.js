import React from 'react';
import AsyncApp from './AsyncApp';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<AsyncApp />);
});
