import React from 'react';
import ReactDOM from 'react-dom';
import Payment from './Payment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Payment />, div);
  ReactDOM.unmountComponentAtNode(div);
});

