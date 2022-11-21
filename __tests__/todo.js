/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test suite", () => {
  beforeAll(() => {
    add({
      title: "eat lunch",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  test("Adding a new item", () => {
    const todoLength = all.length;
    add({
      title: "testing",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoLength + 1);
  });

  test("Marking as complete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Overdue items", () => {
    add({
      title: "item overdue",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  test("Due today", () => {
    expect(dueToday().length).toBe(2);
  });

  test("Due later items", () => {
    add({
      title: "test item due later",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});
