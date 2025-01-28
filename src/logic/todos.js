import "../styles/todos.styles.css";

export class toDos {
  constructor(
    title = "testTitle",
    description = "testDesc",
    dueDate = "testDate",
    priority = "high"
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

//console.log(new toDos("hello","I am greeting.","12/7/25", 'High'));
