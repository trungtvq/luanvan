import React from 'react';
import ReactDOM from 'react-dom';
import EditTeamTask from './EditTeamTask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditTeamTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});

