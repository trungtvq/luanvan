import React from 'react';
import ReactDOM from 'react-dom';
import Evaluate from './Evaluate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Evaluate />, div);
  ReactDOM.unmountComponentAtNode(div);
});

