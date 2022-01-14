/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
const list = document.getElementById('todos-list');
const addInput = document.getElementById('todo-input');

export const createTodo = () => {
  const text = addInput.value;
  const getLocalStorageData = localStorage.getItem('New Todo');
  if (getLocalStorageData == null) {
    var listArray = [];
  } else {
    var listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(text);
  localStorage.setItem('New Todo', JSON.stringify(listArray));

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

  const div = document.createElement('div');
  div.classList.add('TextItems');

  const remove = document.createElement('span');
  remove.classList.add('remove');
  // eslint-disable-next-line quotes
  remove.innerHTML = `<i class="fas fa-trash delete-icon"></i>`;

  li.appendChild(checkbox);
  li.appendChild(paragraph);
  li.appendChild(remove);
  list.appendChild(li);

  addInput.value = '';
};

export const updateTodo = () => {
  const editInput = document.getElementsByName('editInput')[0];
  if (!editInput) {
    // eslint-disable-next-line no-useless-return
    return;
  }
  const newText = editInput.value;

  if (newText !== '') {
    const paragraph = editInput.parentElement.querySelector('paragraph');
    paragraph.textContent = newText;
  }
  editInput.remove();
};

export const showEditInput = (paregraphElement) => {
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
};

export const removeTodo = (removeElement, index) => {
  const getLocalStorageData = localStorage.getItem('New Todo');
  const listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem('New Todo', JSON.stringify(listArray));
  removeElement.parentElement.parentElement.remove();
};

export const toggleComplete = (inputElement) => {
  if (inputElement.checked === false) {
    inputElement.parentElement.classList.remove('complete');
  } else {
    inputElement.parentElement.classList.add('complete');
  }
};
