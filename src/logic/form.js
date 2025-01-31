import "../styles/form.styles.css";

import { projectManager } from "./projectManager";
import { printProjectNames } from "./sidebar";

function handleNewProjectSubmit() {
  const getNameValue = document.querySelector(".projectName");
  const getColorValue = document.querySelector(".color");

  projectManager.addProject(getNameValue.value, getColorValue.value);
}

export function addProjectForm() {
  const blackoutBackgroundDiv = document.createElement("div");
  blackoutBackgroundDiv.classList.add("blackoutBG");
  blackoutBackgroundDiv.addEventListener("click", (e) => {
    //console.log("clicked background");
    if (e.target === blackoutBackgroundDiv) {
      blackoutBackgroundDiv.remove();
    }
  });

  const formDiv = document.createElement("div");
  formDiv.classList.add("formDiv");

  const projectFormHeader = document.createElement("div");
  projectFormHeader.classList.add("projectFormHeader");

  const projectFormTitle = document.createElement("h3");
  projectFormTitle.textContent = "Add New Project";
  projectFormTitle.classList.add("projectFormTitle");
  projectFormHeader.appendChild(projectFormTitle);

  const projectFormExit = document.createElement("span");
  projectFormExit.textContent = "X";
  projectFormExit.classList.add("projectFormExit");
  projectFormExit.addEventListener("click", (e) => {
    //console.log("clicked background");
    if (e.target === projectFormExit) {
      blackoutBackgroundDiv.remove();
    }
  });
  projectFormHeader.appendChild(projectFormExit);

  formDiv.appendChild(projectFormHeader);

  const form = document.createElement("form");
  form.classList.add("projectForm");

  const inputNameDiv = document.createElement("div");
  inputNameDiv.classList.add("inputNameDiv");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "projectName");
  nameLabel.textContent = "Name";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "projectName");
  nameInput.classList.add("projectName");

  const nameError = document.createElement("span");
  nameError.classList.add("nameError");
  nameError.style.opacity = '0';

  inputNameDiv.appendChild(nameLabel);
  inputNameDiv.appendChild(nameInput);
  inputNameDiv.appendChild(nameError);
  form.appendChild(inputNameDiv);

  const inputColorDiv = document.createElement("div");
  inputColorDiv.classList.add("inputColorDiv");
  const colorLabel = document.createElement("label");
  colorLabel.setAttribute("for", "color");
  colorLabel.textContent = "Color";
  const colorInput = document.createElement("input");
  colorInput.setAttribute("type", "color");
  colorInput.setAttribute("id", "color");
  colorInput.classList.add("color");

  inputColorDiv.appendChild(colorLabel);
  inputColorDiv.appendChild(colorInput);
  form.appendChild(inputColorDiv);

  const newProjectSubmit = document.createElement("button");
  newProjectSubmit.classList.add("newProjectSubmit");
  newProjectSubmit.textContent = "Submit";
  newProjectSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameInput.value.length != 0) {
      handleNewProjectSubmit();
      printProjectNames();
      nameError.style.opacity = '0';
      nameInput.value = '';
      colorInput.value = '#000000';
    } else {
      nameError.style.opacity = '1';
      nameError.textContent = "Name is required.";
    }
  });

  form.appendChild(newProjectSubmit);

  formDiv.appendChild(form);
  blackoutBackgroundDiv.appendChild(formDiv);
  document.body.appendChild(blackoutBackgroundDiv);
}
