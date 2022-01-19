const removeTask = require('./remove');

let tasks = [
  {
    description: 'Hello',
    completed: false,
    index: 0,
  },
];

test('A task was removed', () => {
  document.body.innerHTML =
    '<div class="todos-list" id="todos-list"><li id="listitem">New Task</li></div>';
  let div = document.querySelector('.todos-list');
  let list = document.querySelector('#listitem');
  removeTask(0, tasks);
  expect(removeTask().length).toBe(0);
});
