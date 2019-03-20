import React from 'react';
import ReactDOM from 'react-dom';
import MyTask from './MyTask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});

