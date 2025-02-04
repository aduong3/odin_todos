import { toDos } from "./todos.js";

export class Projects {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.taskID = 0;
    this.taskCounter = 0;
    this.toDoList = [];
  }

  addToDo(title, description, dueDate, priority) {
    const newToDo = new toDos(
      title,
      description,
      dueDate,
      priority,
      this.taskID++
    );
    this.toDoList.push(newToDo);
    this.taskCounter++;
  }

  getToDos() {
    return this.toDoList;
  }

  deleteToDo(task) {
    this.toDoList = this.toDoList.filter(
      (currentTask) => currentTask.id !== task.id
    );
    this.taskCounter--;
  }
}
