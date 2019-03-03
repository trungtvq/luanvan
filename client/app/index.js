import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import todos from './reducers'

import Root from './components/Root'
import './styles/styles.scss';

const store = createStore(todos)
render(<Root store={store} />, document.getElementById('app'))

