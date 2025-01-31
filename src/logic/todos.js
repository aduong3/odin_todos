import "../styles/todos.styles.css";

export class toDos {
  constructor(
    title,
    description,
    dueDate,
    priority
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
