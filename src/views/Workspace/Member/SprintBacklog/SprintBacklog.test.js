import React from 'react';
import ReactDOM from 'react-dom';
import SprintBacklog from './SprintBacklog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SprintBacklog />, div);
  ReactDOM.unmountComponentAtNode(div);
});

