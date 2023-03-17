import { nav, card, button, footer } from "./components.js";
import { head, body, skillsContainer, projectsHome, projectsPress, projectsContact, projectCards, pressContainer } from "./selectors.js";
import { linkT, linkT2, newDiv, cardCont, cardCont2, cardCont3, bsIcons, fDiv, cardCont4 } from "./elements.js";
import { projects, skills, publications } from "./data.js";
import { projects as pro, press, contact } from "./urls.js";

//Adds bootstrap css
linkT2.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
linkT2.setAttribute("rel", "stylesheet");
linkT2.setAttribute("integrity", "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65");
linkT2.setAttribute("crossorigin", "anonymous");
head.append(linkT2);

//Adds bootstrap icons
head.innerHTML += bsIcons

//Adds CSS
linkT.setAttribute("rel", "stylesheet");
linkT.setAttribute("href", "../Styles/winser.css");
head.append(linkT);

//Adds styles to Navbar container
newDiv.setAttribute("class", "navDiv");

//Adds navbar as the 1st child of the body tag
newDiv.innerHTML = nav;
body.insertBefore(newDiv, body.firstChild);

//Adds footer the body tag
fDiv.innerHTML = footer();
body.append(fDiv);

//Requires further development, needs show more logic 
let allCardsSkills = skills.length

//Adds skills to the skills container
let displaySkills = (cardAmt, container, row) => {
    for (let i = 0; i < cardAmt; i++) {

        row.innerHTML += card(skills[i].img, skills[i].alt, skills[i].learnMore, skills[i].skill)
        container.append(row);
        //Sets the class of the skills container
        container.setAttribute("class", "container");
        row.setAttribute("class", "row");
    }
}

//Skills Home
displaySkills(4, skillsContainer, cardCont);

//Skills index


//Sets the class of the skills container
skillsContainer.setAttribute("class", "container");
cardCont.setAttribute("class", "row");

//Buttons
//projectsPress.innerHTML += button("Publications", press);
//projectsContact.innerHTML += button("Contact", contact);

//Count of cards
let allCardsProjects = projects.length

//Adds projects to the projects container
let displayProjects = (cardAmt, container, row) => {
    for (let i = 0; i < cardAmt; i++) {
        
        row.innerHTML += card(projects[i].img, projects[i].alt, projects[i].learnMore, projects[i].project)
        container.append(row);
        //Sets the class of the projects container
        container.setAttribute("class", "container");
        row.setAttribute("class", "row");
    }
}
//Projects Home
displayProjects(allCardsProjects, projectCards, cardCont2);

//Projects Index
//let divIn = document.createElement("div")
//displayProjects(allCardsProjects, projectCindex, divIn);


//Count of cards
let allCardsPress = publications.length

//Adds publications to the press container
let displayPress = (cardAmt, container, row) => {
    for (let i = 0; i < cardAmt; i++) {
        
        row.innerHTML += card(publications[i].img, publications[i].alt, publications[i].Read, publications[i].publication)
        container.append(row);
        //Sets the class of the press container
        container.setAttribute("class", "container");
        row.setAttribute("class", "row");
    }
}

//Press Home
displayPress(allCardsPress, pressContainer, cardCont3);

//Press Index



