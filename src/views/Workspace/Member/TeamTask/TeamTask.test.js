import React from 'react';
import ReactDOM from 'react-dom';
import TeamTask from './TeamTask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});

