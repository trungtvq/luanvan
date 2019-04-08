import React from 'react';
import ReactDOM from 'react-dom';
import Solve from './Solve';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Solve />, div);
  ReactDOM.unmountComponentAtNode(div);
});

