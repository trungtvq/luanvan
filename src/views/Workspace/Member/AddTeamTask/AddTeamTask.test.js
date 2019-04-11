import React from 'react';
import ReactDOM from 'react-dom';
import AddTeamTask from './AddTeamTask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTeamTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});

