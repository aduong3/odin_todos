import "../styles/index.styles.css";
import sidebar from "./sidebar.js";
import content from "./content.js";

import { projectManager } from "./projectManager.js";

sidebar();
content();



window.projectManager = projectManager;