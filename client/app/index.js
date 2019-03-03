import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import todos from './reducers'

import Root from './components/Root'
import './styles/styles.scss';
//configuation about store in redux, this code can be change due to extending project
const store = createStore(todos)
//we will call and route between each component,
render(<Root store={store} />, document.getElementById('app'))