import { nav } from "./components.js";
import { head, body } from "./selectors.js";

//Creates Nav container
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "navDiv");

//Adds navbar as the 1st child of the body tag
newDiv.innerHTML = nav;
body.insertBefore(newDiv, body.firstChild);

//Adds CSS
let linkT = document.createElement("link");
linkT.setAttribute("rel", "stylesheet");
linkT.setAttribute("href", "winser.css");
head.append(linkT);

//Adds bootstrap css
let linkT2 = document.createElement("link");
linkT2.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
linkT2.setAttribute("rel", "stylesheet");
linkT2.setAttribute("integrity", "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65");
linkT2.setAttribute("crossorigin", "anonymous");
head.append(linkT2);










