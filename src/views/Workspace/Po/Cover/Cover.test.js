import React from 'react';
import ReactDOM from 'react-dom';
import Cover from './Cover';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cover />, div);
  ReactDOM.unmountComponentAtNode(div);
});

