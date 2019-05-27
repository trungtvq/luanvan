import React from 'react';
import ReactDOM from 'react-dom';
import CreateSprint from './CreateSprint';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(CreateSprint);
  ReactDOM.unmountComponentAtNode(div);
});

