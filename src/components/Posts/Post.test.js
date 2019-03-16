import React from 'react';
import Posts from './Posts';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<Posts />);
});
