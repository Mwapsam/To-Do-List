const list = document.getElementById('todos-list');
const addInput = document.getElementById('todo-input');

export const createTodo = () => {
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

  const div = document.createElement('div');
  div.classList.add('span-item');

  const remove = document.createElement('span');
  remove.classList.add('remove');
  // eslint-disable-next-line quotes
  remove.innerHTML = `<i class="fas fa-ellipsis-v fas-item"></i>`;

  li.appendChild(checkbox);
  li.appendChild(paragraph);
  li.appendChild(div);
  div.appendChild(remove);
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

export const removeTodo = (removeElement) => {
  removeElement.parentElement.remove();
};

export const toggleComplete = (inputElement) => {
  if (inputElement.checked === false) {
    inputElement.parentElement.classList.remove('complete');
  } else {
    inputElement.parentElement.classList.add('complete');
  }
};
