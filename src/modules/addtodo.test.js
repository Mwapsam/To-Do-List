import createTodo from './addtodo.js';

const tasks = [
  {
    description: 'Hello',
    index: 1,
    completed: false,
  },
];

test('An array was added', () => {
  document.body.innerHTML = '<div class="todos-list" id="todos-list"></div>';

  const div = document.querySelector('.todos-list');

  createTodo(tasks);
  tasks.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = element.description;
    div.appendChild(li);
  });
  const todos = document.querySelectorAll('.todos-list li');

  expect(todos).toHaveLength(2);
});
