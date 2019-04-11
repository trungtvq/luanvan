import React from 'react';
import ReactDOM from 'react-dom';
import Velocity from './Velocity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Velocity />, div);
  ReactDOM.unmountComponentAtNode(div);
});

