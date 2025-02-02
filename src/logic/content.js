import "../styles/content.styles.css";

import { blackOutDiv, removePreviousForms } from "./Form";

function pullUpInfo(task) {
  //console.log(task);
  removePreviousForms();
  const blackOut = blackOutDiv();

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('cardDiv');

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");

  const priorityColorDiv = document.createElement("div");
  priorityColorDiv.classList.add(`bg-${task.priority}`, 'priorityColorDiv');
  cardDiv.appendChild(priorityColorDiv);

  const taskName = document.createElement("h2");
  taskName.classList.add("taskName");
  taskName.textContent = task.title;

  infoDiv.appendChild(taskName);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("descriptionDiv");

  const taskDescriptionLabel = document.createElement("h3");
  taskDescriptionLabel.textContent = "Description";
  taskDescriptionLabel.classList.add("descriptionLabel");

  const taskDescriptionValue = document.createElement("p");
  taskDescriptionValue.textContent = task.description;
  taskDescriptionValue.classList.add("descriptionValue");

  descriptionDiv.appendChild(taskDescriptionLabel);
  descriptionDiv.appendChild(taskDescriptionValue);
  infoDiv.appendChild(descriptionDiv);

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("dateDiv");

  const dateLabel = document.createElement("h3");
  dateLabel.classList.add("dateLabel");
  dateLabel.textContent = "Date";

  const dateValue = document.createElement("p");
  dateValue.classList.add("dateValue");
  dateValue.textContent = task.dueDate;

  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateValue);
  infoDiv.appendChild(dateDiv);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttonsDiv');

  const editButton = document.createElement('p');
  editButton.classList.add('editTaskButton');
  editButton.textContent = 'Edit';

  buttonsDiv.appendChild(editButton);

  const deleteButton = document.createElement('p');
  deleteButton.classList.add('deleteTaskButton');
  deleteButton.textContent = 'Delete';

  buttonsDiv.appendChild(deleteButton);
  infoDiv.appendChild(buttonsDiv);

  cardDiv.appendChild(infoDiv);
  blackOut.appendChild(cardDiv);
  document.body.appendChild(blackOut);
}

export default function content() {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("contentContainer");

  document.body.appendChild(contentContainer);
}

export function updateContent(projName, toDos) {
  const contentContainer = document.querySelector(".contentContainer");
  if (contentContainer.innerHTML != null) {
    contentContainer.innerHTML = "";
  }

  const contentHeaderDiv = document.createElement("div");
  contentHeaderDiv.classList.add("contentHeaderDiv");

  const contentTitle = document.createElement("h2");
  contentTitle.textContent = projName;
  contentTitle.classList.add(projName);

  contentHeaderDiv.appendChild(contentTitle);

  contentContainer.appendChild(contentHeaderDiv);

  const contentToDoListDiv = document.createElement("div");
  contentToDoListDiv.classList.add("contentToDoListDiv");

  toDos.forEach((task) => {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDoDiv", task.priority);

    const toDoName = document.createElement("p");
    //console.log(task);
    toDoName.textContent = `${task.title}`;
    toDoName.classList.add("toDoTitle");
    toDoDiv.appendChild(toDoName);

    const toDoDate = document.createElement("p");
    toDoDate.textContent = `${task.dueDate}`;
    toDoDate.classList.add("toDoDate");
    //console.log(typeof task.dueDate);
    toDoDiv.appendChild(toDoDate);

    const toDoPriority = document.createElement("p");
    toDoPriority.textContent = `${task.priority}`;
    toDoPriority.classList.add("toDoPriority");
    toDoDiv.appendChild(toDoPriority);

    toDoDiv.addEventListener("click", () => pullUpInfo(task));

    contentToDoListDiv.appendChild(toDoDiv);
  });

  contentContainer.appendChild(contentToDoListDiv);
}
