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