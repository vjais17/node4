const todoList = () => {
  const dateFormatted = (d) => {
    return d.toISOString().split("T")[0];
  };
  const todayDay = new Date();
  const today = dateFormatted(todayDay);
  const yesterday = dateFormatted(
    new Date(new Date().setDate(todayDay.getDate() - 1))
  );
  const tomorrow = dateFormatted(
    new Date(new Date().setDate(todayDay.getDate() + 1))
  );

  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((item) => {
      return item.dueDate <= yesterday && item.completed === false;
    });
  };

  const dueToday = () => {
    return all.filter((item) => {
      return item.dueDate === today;
    });
  };

  const dueLater = () => {
    return all.filter((item) => {
      return item.dueDate >= tomorrow;
    });
  };

  // eslint-disable-next-line no-unused-vars
  const displaytheList = (list) => {
    let myTodoList = [];
    list.forEach((item) => {
      if (item.dueDate === today) {
        if (item.completed === true) {
          myTodoList.push(`[x] ${item.title}`);
        } else {
          myTodoList.push(`[ ] ${item.title}`);
        }
      } else {
        if (item.completed === true) {
          myTodoList.push(`[x] ${item.title} ${item.dueDate}`);
        } else {
          myTodoList.push(`[ ] ${item.title} ${item.dueDate}`);
        }
      }
    });
    return myTodoList.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

module.exports = todoList;
