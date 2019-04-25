import React from 'react';
import ReactDOM from 'react-dom';
import NoProject from './NoProject';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoProject />, div);
  ReactDOM.unmountComponentAtNode(div);
});

