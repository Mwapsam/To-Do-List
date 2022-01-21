const removeTask = require('./remove');

const tasks = [
  {
    description: 'Hello',
    completed: false,
    index: 0,
  },
];

test('Should delete item from localstorage', () => {
  const currentLength = tasks.length;
  console.log(removeTask.length);
  expect(removeTask(tasks, 0).length).toBe(currentLength - 1);
});
