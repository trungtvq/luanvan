import React from 'react';
import ReactDOM from 'react-dom';
import edit from './edit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<edit />, div);
  ReactDOM.unmountComponentAtNode(div);
});

