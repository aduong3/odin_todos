import "../styles/form.styles.css";

import { projectManager } from "./projectManager";
import { printProjectNames } from "./sidebar";

function handleNewProjectSubmit() {
  const getNameValue = document.querySelector(".projectName");
  const getColorValue = document.querySelector(".color");

  projectManager.addProject(getNameValue.value, getColorValue.value);
}

function removePreviousForms() {
  const existingForm = document.querySelector(".blackoutBG");
  if (existingForm) existingForm.remove();
}

function addNewProject() {
  const form = document.createElement("form");
  form.classList.add("form");

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
  nameError.style.opacity = "0";

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

  const submitButton = document.createElement("button");
  submitButton.classList.add("submitButton");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameInput.value.length != 0) {
      handleNewProjectSubmit();
      printProjectNames();
      nameError.style.opacity = "0";
      nameInput.value = "";
      colorInput.value = "#000000";
    } else {
      nameError.style.opacity = "1";
      nameError.textContent = "Name is required.";
    }
  });

  form.appendChild(submitButton);

  return form;
}

function addNewTasks() {
  const form = document.createElement("form");
  form.classList.add("form");

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
  nameError.style.opacity = "0";

  inputNameDiv.appendChild(nameLabel);
  inputNameDiv.appendChild(nameInput);
  inputNameDiv.appendChild(nameError);
  form.appendChild(inputNameDiv);

  const inputDescDiv = document.createElement("div");
  inputDescDiv.classList.add("inputDescDiv");

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "description");
  descLabel.textContent = "Description";

  const descInput = document.createElement("input");
  descInput.setAttribute("type", "text");
  descInput.setAttribute("id", "description");
  descInput.classList.add("description");

  inputDescDiv.appendChild(descLabel);
  inputDescDiv.appendChild(descInput);
  form.appendChild(inputDescDiv);

  const inputDateDiv = document.createElement("div");
  inputDateDiv.classList.add("inputDateDiv");

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Date";

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateInput.classList.add("date");

  inputDateDiv.appendChild(dateLabel);
  inputDateDiv.appendChild(dateInput);
  form.appendChild(inputDateDiv);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submitButton");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameInput.value.length != 0) {
      handleNewProjectSubmit();
      printProjectNames();
      nameError.style.opacity = "0";
      nameInput.value = "";
    } else {
      nameError.style.opacity = "1";
      nameError.textContent = "Name is required.";
    }
  });

  form.appendChild(submitButton);

  return form;
}

export function addForm(target) {
  removePreviousForms();
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

  const formHeader = document.createElement("div");
  formHeader.classList.add("formHeader");

  const formTitle = document.createElement("h3");
  formTitle.textContent =
    target === "addProjectButton" ? "Add New Project" : "Add New Task";
  formTitle.classList.add("formTitle");
  formHeader.appendChild(formTitle);

  const formExit = document.createElement("span");
  formExit.textContent = "X";
  formExit.classList.add("formExit");
  formExit.addEventListener("click", (e) => {
    //console.log("clicked background");
    if (e.target === formExit) {
      blackoutBackgroundDiv.remove();
    }
  });
  formHeader.appendChild(formExit);

  formDiv.appendChild(formHeader);

  let formElements;
  if (target === "addProjectButton") {
    formElements = addNewProject();
  } else {
    formElements = addNewTasks();
  }

  formDiv.appendChild(formElements);
  blackoutBackgroundDiv.appendChild(formDiv);
  document.body.appendChild(blackoutBackgroundDiv);
}
