import { Projects } from "./projects.js";

class ProjectManager {
  constructor() {
    this.projectsList = [];

    const defaultProject = new Projects("Default", '#000000');
    this.projectsList.push(defaultProject);
  }

  addProject(projectName, color) {
    if (!this.projectsList.find((project) => project.name === projectName)) {
      const newProject = new Projects(projectName, color);
      this.projectsList.push(newProject);
    } else {
      alert(`${projectName} already exists.`);
    }
  }

  getProjectsList() {
    return this.projectsList;
  }

  getProjectByName(projectName) {
    return this.projectsList.find((project) => project.name === projectName);
  }
}

export const projectManager = new ProjectManager();

export function printProjectNames() {
  const projectsDiv = document.querySelector(".projectsDiv");
  projectsDiv.innerHTML = "";
  projectManager.getProjectsList().forEach((project, i) => {
    const projectNav = document.createElement("div");
    projectNav.classList.add(`projectNav`);

    const projectDot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    projectDot.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    projectDot.setAttribute("viewBox", "0 0 24 24");
    projectDot.classList.add("projectDot");

    const projectDotPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    projectDotPath.setAttribute(
      "d",
      "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    );

    projectDotPath.setAttribute('fill', `${project.color}`);

    projectDot.appendChild(projectDotPath);

    const ListProjectsInDOM = document.createElement("p");
    ListProjectsInDOM.classList.add("projectInDOM");
    ListProjectsInDOM.textContent = project.name;
    ListProjectsInDOM.dataset.index = i;

    projectNav.appendChild(projectDot);
    projectNav.appendChild(ListProjectsInDOM);

    projectsDiv.appendChild(projectNav);
  });
}
