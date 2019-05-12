import React from 'react';
import ReactDOM from 'react-dom';
import ResetFirst from './ResetFirst';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResetFirst />, div);
  ReactDOM.unmountComponentAtNode(div);
});
