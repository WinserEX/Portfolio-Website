import { nav, card, button } from "./components.js";
import { head, body, skillsContainer } from "./selectors.js";
import { linkT, linkT2, newDiv, cardCont } from "./elements.js";
import { projects, skills, publications } from "./data.js";
import { projects as pro, press, contact } from "./urls.js";

//Adds bootstrap css
linkT2.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
linkT2.setAttribute("rel", "stylesheet");
linkT2.setAttribute("integrity", "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65");
linkT2.setAttribute("crossorigin", "anonymous");
head.append(linkT2);

//Adds CSS
linkT.setAttribute("rel", "stylesheet");
linkT.setAttribute("href", "../Styles/winser.css");
head.append(linkT);

//Adds styles to Navbar container
newDiv.setAttribute("class", "navDiv");

//Adds navbar as the 1st child of the body tag
newDiv.innerHTML = nav;
body.insertBefore(newDiv, body.firstChild);

//Adds skills to the skills container
for (let i = 0; i < skills.length; i++) {

    cardCont.innerHTML += card(skills[i].img, skills[i].alt, skills[i].learnMore, skills[i].skill)
    skillsContainer.append(cardCont);
    console.log(i);
}

skillsContainer.setAttribute("class", "container");
cardCont.setAttribute("class", "row");

//Buttons

let projectsHome = document.querySelector(".projects");
let projectsPress = document.querySelector(".press");
let projectsContact = document.querySelector(".contact");

projectsHome.innerHTML += button("Projects", pro);
projectsPress.innerHTML += button("Publications", press);
projectsContact.innerHTML += button("Contact", contact);