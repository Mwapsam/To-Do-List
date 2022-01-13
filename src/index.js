/* eslint-disable quotes */
/* eslint-disable default-case */
import { component } from './modules/lodash.js';
import './style.css';
import {
  createTodo,
  showEditInput,
  removeTodo,
  toggleComplete,
  updateTodo,
} from './modules/crud.js';

const list = document.getElementById('todos-list');
const addInput = document.getElementById('todo-input');
const addBtn = document.getElementById('rotate');

document.body.appendChild(component());

list.addEventListener('click', (event) => {
  event.stopPropagation();

  switch (event.target.tagName) {
    case 'p':
      showEditInput(event.target);
      break;
    case 'SPAN':
      removeTodo(event.target);
      break;
  }
});

list.addEventListener('change', (event) => {
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    toggleComplete(event.target);
  }
});

list.addEventListener('keypress', (event) => {
  if (
    event.target.tagName === 'INPUT' &&
    event.target.type === 'text' &&
    event.key === 'Enter'
  ) {
    updateTodo();
  }
});

document.addEventListener('click', updateTodo());

addBtn.addEventListener('click', createTodo());

addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createTodo();
  }
});
// eslint-disable-next-line no-multiple-empty-lines
