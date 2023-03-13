import { nav, card, button } from "./components.js";
import { head, body, skillsContainer, projectsHome, projectsPress, projectsContact, projectCards } from "./selectors.js";
import { linkT, linkT2, newDiv, cardCont, cardCont2 } from "./elements.js";
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

//Sets the class of the skills container
skillsContainer.setAttribute("class", "container");
cardCont.setAttribute("class", "row");

//Buttons
projectsPress.innerHTML += button("Publications", press);
projectsContact.innerHTML += button("Contact", contact);

//Adds projects to the projects container
for (let i = 0; i < projects.length; i++) {
    cardCont2.innerHTML += card(projects[i].img, projects[i].alt, projects[i].learnMore, projects[i].project)
    projectCards.append(cardCont2);
    console.log(i);
}

//Sets the class of the projects container
projectCards.setAttribute("class", "container");
cardCont2.setAttribute("class", "row");