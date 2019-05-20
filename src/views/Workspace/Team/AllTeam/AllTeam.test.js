import React from 'react';
import ReactDOM from 'react-dom';
import AllTeam from './AllTeam';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(AllTeam);
  ReactDOM.unmountComponentAtNode(div);
});

