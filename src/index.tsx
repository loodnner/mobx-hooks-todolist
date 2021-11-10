import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoList } from './stores/todo-list';
import { StoreProvider } from './helper/store-provider';

const todoList = new TodoList([
  'Should learn to planning money',
  'Should do some exercise',
  'Should eat less'
])


ReactDOM.render(
  <StoreProvider value={todoList}>
  <App />
  </StoreProvider>,
  document.getElementById('root')
);
