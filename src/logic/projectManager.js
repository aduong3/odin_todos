import { Projects } from "./projects.js";

class ProjectManager {
  constructor() {
    this.projectsList = [];

    const defaultProject = new Projects("Default");
    this.projectsList.push(defaultProject);
  }

  addProject(projectName) {
    if (!this.projectsList.find((project) => project.name === projectName)) {
      const newProject = new Projects(projectName);
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
