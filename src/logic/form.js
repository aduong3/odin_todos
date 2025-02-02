import "../styles/form.styles.css";

import { projectManager } from "./projectManager";
import { printProjectNames } from "./sidebar";
import { updateContent } from "./content";

export function blackOutDiv() {
  const blackoutBackgroundDiv = document.createElement("div");
  blackoutBackgroundDiv.classList.add("blackoutBG");
  blackoutBackgroundDiv.addEventListener("click", (e) => {
    //console.log("clicked background");
    if (e.target === blackoutBackgroundDiv) {
      blackoutBackgroundDiv.remove();
    }
  });
  return blackoutBackgroundDiv;
}

function handleNewTaskSubmit() {
  const getName = document.querySelector(".taskName");
  const getDesc = document.querySelector(".description");
  const getDate = document.querySelector(".date");
  const getPriority = document.querySelector(".prioritySelect");
  const getSelect = document.querySelector(".selectProject");
  //console.log(getDesc.value);
  if (getDesc.value === "") getDesc.value = "No Description";
  console.log(getDate.value);
  //if (getDate.value === '') getDate.value = new Date();
  projectManager
    .getProjectByName(getSelect.value)
    .addToDo(getName.value, getDesc.value, getDate.value, getPriority.value);
}

function handleNewProjectSubmit() {
  const getName = document.querySelector(".projectName");
  const getColor = document.querySelector(".color");

  projectManager.addProject(getName.value, getColor.value);
}

export function removePreviousForms() {
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
  nameLabel.setAttribute("for", "taskName");
  nameLabel.textContent = "Name";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "taskName");
  nameInput.classList.add("taskName");

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

  let today = new Date().toLocaleDateString().split("T")[0];
  let [month, day, year] = today.split("/");
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  let formattedToday = `${year}-${month}-${day}`;
  console.log(formattedToday);
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("value", formattedToday);
  dateInput.classList.add("date");

  inputDateDiv.appendChild(dateLabel);
  inputDateDiv.appendChild(dateInput);
  form.appendChild(inputDateDiv);

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("priorityDiv");

  const priorityLabel = document.createElement("label");
  priorityLabel.classList.add("priorityLabel");
  priorityLabel.textContent = "Priority";

  priorityDiv.appendChild(priorityLabel);

  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("prioritySelect");

  const lowOption = document.createElement("option");
  lowOption.value = "Low";
  lowOption.textContent = "Low";
  prioritySelect.appendChild(lowOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "Medium";
  mediumOption.textContent = "Medium";
  prioritySelect.appendChild(mediumOption);

  const highOption = document.createElement("option");
  highOption.value = "High";
  highOption.textContent = "High";
  prioritySelect.appendChild(highOption);
  priorityDiv.appendChild(prioritySelect);

  form.appendChild(priorityDiv);

  const selectDiv = document.createElement("div");
  selectDiv.classList.add("selectDiv");

  const selectLabel = document.createElement("label");
  selectLabel.classList.add("selectLabel");
  selectLabel.textContent = "Project";

  const selectProject = document.createElement("select");
  selectProject.classList.add("selectProject");

  projectManager.getProjectsList().forEach((project) => {
    const option = document.createElement("option");
    option.value = project.name;
    option.textContent = project.name;

    selectProject.appendChild(option);
  });
  selectDiv.appendChild(selectLabel);
  selectDiv.appendChild(selectProject);

  form.appendChild(selectDiv);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submitButton");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameInput.value.length != 0) {
      handleNewTaskSubmit();
      updateContent(
        selectProject.value,
        projectManager.getProjectByName(selectProject.value).getToDos()
      );
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
  const blackoutBackgroundDiv = blackOutDiv();

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
