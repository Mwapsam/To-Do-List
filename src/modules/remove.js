let removeTask = (taskList, index) => {
  const m = taskList.filter((e, m) => m !== index);
  return m;
};

module.exports = removeTask;
