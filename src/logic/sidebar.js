import "../styles/sidebar.styles.css";
import { addForm, getTodaysDate, getUpcomingDate } from "./Form";
import { projectManager } from "./projectManager";
import { updateContent } from "./content";

function countTodayTask() {
  let amount = 0;
  projectManager.getProjectsList().forEach((project) => {
    projectManager
      .getProjectByName(project.name)
      .getToDos()
      .forEach((toDo) => {
        if (toDo.dueDate === getTodaysDate()) {
          amount++;
        }
      });
  });
  //console.log(amount);
  return amount;
}

export function updateCountToday() {
  let todayTasksNumber = document.querySelector(".todayTasksNumber");
  todayTasksNumber.textContent = countTodayTask();
}

export function getTodayTasks() {
  let todayTasks = [];
  projectManager.getProjectsList().forEach((project) => {
    //console.log(project);
    const projectTasks = projectManager
      .getProjectByName(project.name)
      .getToDos()
      .filter((todo) => todo.dueDate === getTodaysDate());
    //console.log(projectManager.getProjectByName(project.name).getToDos());
    todayTasks.push(...projectTasks);
  });
  return todayTasks;
}

function countUpcomingTask() {
  let amount = 0;
  let upcomingWeek = getUpcomingDate();
  let today = getTodaysDate();
  projectManager.getProjectsList().forEach((project) => {
    projectManager
      .getProjectByName(project.name)
      .getToDos()
      .forEach((toDo) => {
        if (toDo.dueDate <= upcomingWeek && toDo.dueDate >= today) {
          amount++;
        }
      });
  });
  //console.log(amount);
  return amount;
}

export function updateCountUpcoming() {
  let upcomingTasksNumber = document.querySelector(".upcomingTasksNumber");
  upcomingTasksNumber.textContent = countUpcomingTask();
}

export function getUpcomingTasks() {
  let upcomingTasks = [];
  projectManager.getProjectsList().forEach((project) => {
    //console.log(project);
    const projectTasks = projectManager
      .getProjectByName(project.name)
      .getToDos()
      .filter((todo) => todo.dueDate <= getUpcomingDate());
    //console.log(projectManager.getProjectByName(project.name).getToDos());
    upcomingTasks.push(...projectTasks);
  });
  return upcomingTasks;
}

function createMenuIcon() {
  const menuIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  menuIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  menuIcon.setAttribute("viewBox", "0 0 24 24");
  menuIcon.classList.add("menuIcon");

  const menuIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  menuIconPath.setAttribute(
    "d",
    "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
  );

  menuIcon.appendChild(menuIconPath);
  return menuIcon;
}

export function printProjectNames() {
  const projectsDiv = document.querySelector(".projectsDiv");
  projectsDiv.innerHTML = "";
  projectManager.getProjectsList().forEach((project, i) => {
    const projectNav = document.createElement("div");
    projectNav.classList.add("projectNav", "navDiv");

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

    projectDotPath.setAttribute("fill", `${project.color}`);

    projectDot.appendChild(projectDotPath);

    const ListProjectsInDOM = document.createElement("p");
    ListProjectsInDOM.classList.add("projectInDOM");
    ListProjectsInDOM.textContent = project.name;
    ListProjectsInDOM.dataset.index = i;

    const taskNumber = document.createElement("span");
    taskNumber.classList.add(`taskNumber-${project.name}`, "taskNumber");
    taskNumber.textContent = projectManager
      .getProjectByName(project.name)
      .getToDos().length;

    projectNav.appendChild(projectDot);
    projectNav.appendChild(ListProjectsInDOM);
    projectNav.appendChild(taskNumber);
    projectNav.appendChild(createMenuIcon());

    projectNav.addEventListener("click", () =>
      updateContent(
        project.name,
        projectManager.getProjectByName(project.name).getToDos()
      )
    );

    projectsDiv.appendChild(projectNav);
  });
}

export default function sidebar() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar");

  const sortByDiv = document.createElement("div");
  sortByDiv.classList.add("sortByDiv");

  const webTitle = document.createElement("h2");
  webTitle.classList.add("webTitle");
  webTitle.textContent = "To-Doing";

  sidebarContainer.appendChild(webTitle);

  const addTaskDiv = document.createElement("div");
  addTaskDiv.classList.add("addTaskDiv");
  addTaskDiv.addEventListener("click", (e) => {
    //console.log(e.target.classList.value);
    addForm(e.target.classList.value);
  });

  const addTaskButton = document.createElement("p");
  addTaskButton.textContent = "Add Task";
  addTaskButton.classList.add("addTaskButton");

  //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note-plus</title><path d="M19 13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H13.35C13.13 20.37 13 19.7 13 19C13 15.69 15.69 13 19 13M14 4.5L19.5 10H14V4.5M23 18V20H20V23H18V20H15V18H18V15H20V18H23Z" /></svg>
  const addTaskSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  addTaskSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  addTaskSVG.setAttribute("viewBox", "0 0 24 24");
  addTaskSVG.classList.add("addTaskSVG");

  const addTaskPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  addTaskPath.setAttribute(
    "d",
    "M19 13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H13.35C13.13 20.37 13 19.7 13 19C13 15.69 15.69 13 19 13M14 4.5L19.5 10H14V4.5M23 18V20H20V23H18V20H15V18H18V15H20V18H23Z"
  );

  addTaskSVG.appendChild(addTaskPath);
  addTaskDiv.appendChild(addTaskSVG);
  addTaskDiv.appendChild(addTaskButton);
  sidebarContainer.appendChild(addTaskDiv);

  const todayDiv = document.createElement("div");
  todayDiv.addEventListener("click", () => {updateContent('Today', getTodayTasks())});
  todayDiv.classList.add("todayDiv", "navDiv");

  //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-today</title><path d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>
  const todaySVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  todaySVG.classList.add("todaySVG");
  todaySVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  todaySVG.setAttribute("viewBox", "0 0 24 24");

  const todayPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  todayPath.setAttribute(
    "d",
    "M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
  );

  todaySVG.appendChild(todayPath);
  todayDiv.appendChild(todaySVG);

  const today = document.createElement("p");
  today.textContent = "Today";
  today.classList.add("today");

  todayDiv.appendChild(today);

  const todayTasksNumber = document.createElement("span");
  todayTasksNumber.classList.add("todayTasksNumber");
  todayTasksNumber.textContent = "0" || countTodayTask();

  todayDiv.appendChild(todayTasksNumber);

  const upcomingDiv = document.createElement("div");
  upcomingDiv.classList.add("upcomingDiv", "navDiv");
  upcomingDiv.addEventListener("click", () => {updateContent('Upcoming',getUpcomingTasks())});

  //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-upcoming</title><path d="M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z" /></svg>
  const upcomingSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  upcomingSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  upcomingSVG.setAttribute("viewBox", "0 0 24 24");
  upcomingSVG.classList.add("upcomingSVG");

  const upcomingPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  upcomingPath.setAttribute(
    "d",
    "M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z"
  );

  upcomingSVG.appendChild(upcomingPath);
  upcomingDiv.appendChild(upcomingSVG);

  const upcoming = document.createElement("p");
  upcoming.textContent = "Upcoming";
  upcoming.classList.add("upcoming");

  upcomingDiv.appendChild(upcoming);

  const upcomingTasksNumber = document.createElement("span");
  upcomingTasksNumber.classList.add("upcomingTasksNumber");
  upcomingTasksNumber.textContent = "0" || countUpcomingTask();

  upcomingDiv.appendChild(upcomingTasksNumber);

  //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>

  sortByDiv.appendChild(todayDiv);
  sortByDiv.appendChild(upcomingDiv);

  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projectsDiv");

  const projectsTitleDiv = document.createElement("div");
  projectsTitleDiv.classList.add("projectsTitleDiv");

  const yourProjects = document.createElement("h2");
  yourProjects.textContent = "Your Projects";
  yourProjects.classList.add("yourProjects");

  const addProjectButton = document.createElement("p");
  addProjectButton.textContent = "+";
  addProjectButton.classList.add("addProjectButton");
  addProjectButton.addEventListener("click", (e) => {
    //console.log(e.target.classList.value);
    addForm(e.target.classList.value);
  });

  projectsTitleDiv.appendChild(yourProjects);
  projectsTitleDiv.appendChild(addProjectButton);

  sidebarContainer.appendChild(sortByDiv);
  sidebarContainer.appendChild(projectsTitleDiv);
  sidebarContainer.appendChild(projectsDiv);

  document.body.appendChild(sidebarContainer);

  printProjectNames();
}
