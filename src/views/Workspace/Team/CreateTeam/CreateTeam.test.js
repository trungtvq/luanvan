import React from 'react';
import ReactDOM from 'react-dom';
import CreateTeam from './CreateTeam';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(CreateTeam);
  ReactDOM.unmountComponentAtNode(div);
});

