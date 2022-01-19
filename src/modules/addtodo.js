const createTodo = (listArray) => {
  listArray.push({
    completed: false,
    index: listArray.length + 1,
    description: listArray,
  });
};

module.exports = createTodo;
