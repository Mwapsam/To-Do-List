const createTodo = require('./addtodo');

let tasks = [
  {
    description: 'Hello',
    index: 1,
    completed: false,
  },
];

test('An array was added', () => {
  document.body.innerHTML = '<div class="todos-list" id="todos-list"></div>';

  let div = document.querySelector('.todos-list');
  let li;

  createTodo(tasks);
  tasks.forEach((element) => {
    li = document.createElement('li');
    li.innerHTML = element.description;
    div.appendChild(li);
  });
  let anotherVar = document.querySelectorAll('.todos-list li');

  expect(anotherVar).toHaveLength(2);
});
