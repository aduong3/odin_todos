import "../styles/form.styles.css";

import { projectManager, printProjectNames } from "./projectManager";

function handleNewProjectSubmit(e) {
  e.preventDefault();
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

  const projectFormTitle = document.createElement("h3");
  projectFormTitle.textContent = "Add New Project";
  projectFormTitle.classList.add("projectFormTitle");

  formDiv.appendChild(projectFormTitle);

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

  inputNameDiv.appendChild(nameLabel);
  inputNameDiv.appendChild(nameInput);
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
    if (nameInput.value.length != 0) {
      handleNewProjectSubmit(e);
      printProjectNames();
    } else {
      alert("Name is required.");
    }
  });

  form.appendChild(newProjectSubmit);

  formDiv.appendChild(form);
  blackoutBackgroundDiv.appendChild(formDiv);
  document.body.appendChild(blackoutBackgroundDiv);
}
