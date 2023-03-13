//Components
import { about, projects, press, contact, home} from './urls.js';
export let nav = 
`
<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="${home}">Winser</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${about}">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${projects}">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${press}">Press</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${contact}">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`
export let card = (img, alt, learnMore, name) => { 
let res =
`
<div class="card m-4" style="width: 15rem;">
  <img src="${img}" class="card-img-top" alt="${alt}">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <a href="${learnMore}" class="btn btn-primary">Learn more</a>
  </div>
</div>
`
return res;
}

export let button = (text, link) => {
    let res = 
    `
    <div class="container d-flex justify-content-center">
        <div class="row d-flex justify-content-center">
            <a href="${link}" class="btn btn-primary">${text}</a>
        </div>
    </div>
    `
    return res;
}

