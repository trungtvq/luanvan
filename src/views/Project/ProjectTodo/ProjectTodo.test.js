import React from 'react';
import ReactDOM from 'react-dom';
import ProjectTodo from './ProjectTodo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectTodo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

