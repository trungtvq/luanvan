import React from 'react';
import ReactDOM from 'react-dom';
import DailySchedule from './DailySchedule';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DailySchedule />, div);
  ReactDOM.unmountComponentAtNode(div);
});

