import { toDos } from "./todos.js";

export class Projects {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.taskCounter = 0;
    this.toDoList = [];
  }

  addToDo(title, description, dueDate, priority) {
    const newToDo = new toDos(
      title,
      description,
      dueDate,
      priority,
      this.taskCounter++
    );
    this.toDoList.push(newToDo);
  }

  getToDos() {
    return this.toDoList;
  }

  deleteToDo(task) {
    this.toDoList = this.toDoList.filter(
      (currentTask) => currentTask.id !== task.id
    );
  }
}
