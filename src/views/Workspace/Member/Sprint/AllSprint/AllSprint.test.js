import React from 'react';
import ReactDOM from 'react-dom';
import AllSprint from './AllSprint';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(AllSprint);
  ReactDOM.unmountComponentAtNode(div);
});

