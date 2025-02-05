import { projectManager } from "./projectManager.js";
import { Projects } from "./projects.js";
import { toDos } from "./todos.js";

export function saveDataToLocalStorage() {
  localStorage.setItem("projectManager", JSON.stringify(projectManager));
}

export function loadDataFromLocalStorage() {
  const savedData = localStorage.getItem("projectManager");
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    projectManager.projectsList = parsedData.projectsList.map((project) => {
      const restoredProject = new Projects(project.name, project.color);
      restoredProject.taskID = project.taskID;
      restoredProject.taskCounter = project.taskCounter;
      restoredProject.toDoList = project.toDoList.map(
        (todo) =>
          new toDos(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.priority,
            todo.id
          )
      );
      return restoredProject;
    });
  }
}
