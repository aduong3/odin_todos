import "../styles/content.styles.css";

import { blackOutDiv } from "./Form";

function pullUpInfo(){
  const blackOut = blackOutDiv();
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('infoDiv');






  blackOut.appendChild(infoDiv);
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

    toDoDiv.addEventListener('click', pullUpInfo);

    contentToDoListDiv.appendChild(toDoDiv);
  });

  contentContainer.appendChild(contentToDoListDiv);
}
