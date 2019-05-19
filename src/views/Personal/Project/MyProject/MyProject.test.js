import React from 'react';
import ReactDOM from 'react-dom';
import MyProject from './MyProject';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyProject />, div);
  ReactDOM.unmountComponentAtNode(div);
});

