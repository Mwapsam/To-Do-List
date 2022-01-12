/* eslint-disable default-case */
const list = document.getElementById('todos-list');
const addBtn = document.getElementById('todo-add-btn');
const addInput = document.getElementById('todo-input');

function createTodo() {
  const text = addInput.value;

  if (text === '') {
    return;
  }

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';

  const paragraph = document.createElement('p');
  paragraph.classList.add('paragraph');
  paragraph.textContent = text;

  const remove = document.createElement('span');
  remove.classList.add('remove');
  remove.innerHTML = '&cross;';

  li.appendChild(checkbox);
  li.appendChild(paragraph);
  li.appendChild(remove);
  list.appendChild(li);

  addInput.value = '';
}

function showEditInput(paregraphElement) {
  const editInput = document.getElementsByName('editInput')[0];
  if (editInput) {
    editInput.remove();
  }

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'editInput';
  input.value = paregraphElement.textContent;
  input.classList.add('editInput');

  paregraphElement.parentElement.appendChild(input);
  input.focus();
}

function removeTodo(removeElement) {
  removeElement.parentElement.remove();
}

function toggleComplete(inputElement) {
  if (inputElement.checked === false) {
    inputElement.parentElement.classList.remove('complete');
  } else {
    inputElement.parentElement.classList.add('complete');
  }
}

list.addEventListener('click', (event) => {
  event.stopPropagation();

  switch (event.target.tagName) {
    case 'p':
      showEditInput();
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
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    toggleComplete(event.target);
  }
});

addBtn.addEventListener('click', createTodo);

addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createTodo();
  }
});
