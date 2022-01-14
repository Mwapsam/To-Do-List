import { component } from './modules/lodash.js';
import './style.css';
import {
  createTodo,
  showEditInput,
  toggleComplete,
  updateTodo,
  loadTodo,
} from './modules/crud.js';

const list = document.getElementById('todos-list');
const addInput = document.getElementById('todo-input');
const addBtn = document.getElementById('rotate');

document.body.appendChild(component());

list.addEventListener('click', (event) => {
  event.stopPropagation();
  switch (event.target.tagName) {
    case 'P':
      showEditInput(event.target);
      break;

    default:
  }
});

list.addEventListener('change', (event) => {
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    toggleComplete(event.target);
  }
});

list.addEventListener('keypress', (event) => {
  if (
    event.target.tagName === 'INPUT'
    && event.target.type === 'text'
    && event.key === 'Enter'
  ) {
    updateTodo();
  }
});

document.addEventListener('click', updateTodo());

addBtn.addEventListener('click', loadTodo());

addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createTodo();
  }
});

window.onload = loadTodo();
