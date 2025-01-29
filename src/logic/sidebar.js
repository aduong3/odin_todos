import '../styles/sidebar.styles.css';
import { printProjectNames } from './projectManager';

export default function sidebar(){
    
    const sidebarContainer = document.createElement('div');
    sidebarContainer.classList.add('sidebar');


    const sortByDiv = document.createElement('div');
    sortByDiv.classList.add('sortByDiv');

    const webTitle = document.createElement('h2');
    webTitle.classList.add('webTitle');
    webTitle.textContent = 'To-Doing';

    sidebarContainer.appendChild(webTitle);

    const todayDiv = document.createElement('div');
    todayDiv.classList.add('todayDiv');

    //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-today</title><path d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>
    const todaySVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    todaySVG.classList.add('todaySVG');
    todaySVG.setAttribute('xmlns','http://www.w3.org/2000/svg');
    todaySVG.setAttribute('viewBox', '0 0 24 24');

    const todayPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    todayPath.setAttribute('d', 'M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z');

    todaySVG.appendChild(todayPath);
    todayDiv.appendChild(todaySVG);

    const today = document.createElement('p');
    today.textContent = 'Today';
    today.classList.add('today');
    
    todayDiv.appendChild(today);

    const weekDiv = document.createElement('div');
    weekDiv.classList.add('weekDiv');

//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-week</title><path d="M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z" /></svg>
    const weekSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    weekSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    weekSVG.setAttribute('viewBox', '0 0 24 24');
    weekSVG.classList.add('weekSVG');

    const weekPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    weekPath.setAttribute('d','M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z');

    weekSVG.appendChild(weekPath);
    weekDiv.appendChild(weekSVG);

    const week = document.createElement('p');
    week.textContent = 'Next 7 Days';
    week.classList.add('week');

    weekDiv.appendChild(week);

    sortByDiv.appendChild(todayDiv);
    sortByDiv.appendChild(weekDiv);

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projectsDiv');

    const projectsTitleDiv = document.createElement('div');
    projectsTitleDiv.classList.add('projectsTitleDiv');

    const yourProjects = document.createElement('h2');
    yourProjects.textContent = 'Your Projects';
    yourProjects.classList.add('yourProjects');

    const addProjectButton = document.createElement('p');
    addProjectButton.textContent = '+';
    addProjectButton.classList.add('addProjectButton');
    addProjectButton.addEventListener('click', printProjectNames);

    projectsTitleDiv.appendChild(yourProjects);
    projectsTitleDiv.appendChild(addProjectButton);
    
    sidebarContainer.appendChild(sortByDiv);
    sidebarContainer.appendChild(projectsTitleDiv);
    sidebarContainer.appendChild(projectsDiv);

    document.body.appendChild(sidebarContainer);

}






