import "../styles/sidebar.styles.css";
import { addProjectForm } from "./Form";
import { projectManager } from "./projectManager";
import { updateContent } from "./content";

export function printProjectNames() {
  const projectsDiv = document.querySelector(".projectsDiv");
  projectsDiv.innerHTML = "";
  projectManager.getProjectsList().forEach((project, i) => {
    const projectNav = document.createElement("div");
    projectNav.classList.add(`projectNav`);

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

    const taskNumber = document.createElement('span');
    taskNumber.classList.add('taskNumber');
    taskNumber.textContent = '4';

    projectNav.appendChild(projectDot);
    projectNav.appendChild(ListProjectsInDOM);
    projectNav.appendChild(taskNumber);

    projectNav.addEventListener('click', () => updateContent(project.name, projectManager.getProjectByName(project.name).getToDos()));

    projectsDiv.appendChild(projectNav);
  });
}

function createMenuIcon() {
  const menuIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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

export default function sidebar() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar");

  const sortByDiv = document.createElement("div");
  sortByDiv.classList.add("sortByDiv");

  const webTitle = document.createElement("h2");
  webTitle.classList.add("webTitle");
  webTitle.textContent = "To-Doing";

  sidebarContainer.appendChild(webTitle);

  const todayDiv = document.createElement("div");
  todayDiv.classList.add("todayDiv");

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
  todayTasksNumber.textContent = "3";

  todayDiv.appendChild(todayTasksNumber);

  const upcomingDiv = document.createElement("div");
  upcomingDiv.classList.add("upcomingDiv");

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
  upcomingTasksNumber.textContent = "5";

  upcomingDiv.appendChild(upcomingTasksNumber);

  //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>

  const todayMenuIcon = createMenuIcon();
  const upcomingMenuIcon = createMenuIcon();
  todayDiv.appendChild(todayMenuIcon);
  upcomingDiv.appendChild(upcomingMenuIcon);

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
  addProjectButton.addEventListener("click", addProjectForm);

  projectsTitleDiv.appendChild(yourProjects);
  projectsTitleDiv.appendChild(addProjectButton);

  sidebarContainer.appendChild(sortByDiv);
  sidebarContainer.appendChild(projectsTitleDiv);
  sidebarContainer.appendChild(projectsDiv);

  document.body.appendChild(sidebarContainer);

  printProjectNames();
}
