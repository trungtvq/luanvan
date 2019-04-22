import React from 'react';
import ReactDOM from 'react-dom';
import Final from './Final';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Final />, div);
  ReactDOM.unmountComponentAtNode(div);
});

