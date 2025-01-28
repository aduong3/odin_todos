import "../styles/index.styles.css";
// import sidebar from './sidebar.js';

import { Projects } from './projects.js';
import { projectManager } from "./projectManager.js";

const body = document.querySelector("body");

const form = document.createElement("form");
const title = document.createElement("input");
title.setAttribute("type", "text");
title.setAttribute("id", "title");
title.setAttribute("name", "title");
form.appendChild(title);

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
form.appendChild(submitButton);
body.appendChild(form);


const display = document.createElement("p");
display.classList.add("display");

body.appendChild(display);

window.Projects = Projects;
window.projectManager = projectManager;

