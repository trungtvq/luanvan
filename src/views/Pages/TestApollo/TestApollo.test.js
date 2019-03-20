import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import TestAppolo from './TestAppolo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><TestAppolo/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
