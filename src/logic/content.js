import "../styles/content.styles.css";

export default function content() {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("contentContainer");

  document.body.appendChild(contentContainer);
}

export function updateContent(projName, toDos) {
  //console.log(projName, toDos);
  // toDos.forEach((toDo) => {
  //   console.log(toDo);
  // });
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
    toDoDiv.classList.add("toDoDiv");

    const toDoName = document.createElement("p");
    console.log(task);
    toDoName.textContent = `${task.title}`;
    toDoName.classList.add("toDo", task.title, task.priority);

    toDoDiv.appendChild(toDoName);
    contentToDoListDiv.appendChild(toDoDiv);
  });

  contentContainer.appendChild(contentToDoListDiv);
}
