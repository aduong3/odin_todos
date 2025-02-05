import "../styles/index.styles.css";
import sidebar from "./sidebar.js";
import content from "./content.js";
import { saveDataToLocalStorage, loadDataFromLocalStorage } from "./storage.js";
import { projectManager } from "./projectManager.js";
import { Projects } from "./projects.js";

// Load data on startup
document.addEventListener("DOMContentLoaded", () => {
  try {
    loadDataFromLocalStorage();
    sidebar();
    content();
  } catch (error) {
    console.error("Error loading project data:", error);
  }
});

// Wrap project manager methods for auto-save
const methodsToWrap = ["addProject"];
methodsToWrap.forEach((methodName) => {
  const originalMethod = projectManager[methodName];
  if (originalMethod) {
    projectManager[methodName] = function (...args) {
      const result = originalMethod.apply(this, args);
      saveDataToLocalStorage();
      return result;
    };
  }
});

// Wrap task-related methods
const originalAddToDo = Projects.prototype.addToDo;
Projects.prototype.addToDo = function (...args) {
  originalAddToDo.apply(this, args);
  saveDataToLocalStorage();
};

const originalDeleteToDo = Projects.prototype.deleteToDo;
Projects.prototype.deleteToDo = function (...args) {
  originalDeleteToDo.apply(this, args);
  saveDataToLocalStorage();
};

// Expose projectManager for debugging
window.projectManager = projectManager;
