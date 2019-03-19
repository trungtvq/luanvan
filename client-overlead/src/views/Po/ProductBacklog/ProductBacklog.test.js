import React from 'react';
import ReactDOM from 'react-dom';
import ProductBacklog from './ProductBacklog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductBacklog />, div);
  ReactDOM.unmountComponentAtNode(div);
});

