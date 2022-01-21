const createTodo = (listArray) => {
  listArray.push({
    completed: false,
    index: listArray.length + 1,
    description: listArray,
  });
};

export default createTodo;
