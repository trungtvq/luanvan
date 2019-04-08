import React from 'react';
import ReactDOM from 'react-dom';
import AllProject from './AllProject';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllProject />, div);
  ReactDOM.unmountComponentAtNode(div);
});

