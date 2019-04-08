import React from 'react';
import ReactDOM from 'react-dom';
import detail from './detail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<detail />, div);
  ReactDOM.unmountComponentAtNode(div);
});

