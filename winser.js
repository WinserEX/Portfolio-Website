//Components
let nav = 
`
<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Press</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`

//Creates Nav container
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "navDiv");

//Head tag
let css = document.querySelector("head");
//Body tag
let body = document.querySelector("body");

//Adds navbar to top of body tag
newDiv.innerHTML = nav;
body.insertBefore(newDiv, body.firstChild);

//Adds CSS
let linkT = document.createElement("link");
linkT.setAttribute("rel", "stylesheet");
linkT.setAttribute("href", "winser.css");
css.append(linkT);

//Adds bootstrap css
let linkT2 = document.createElement("link");
linkT2.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
linkT2.setAttribute("rel", "stylesheet");
linkT2.setAttribute("integrity", "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65");
linkT2.setAttribute("crossorigin", "anonymous");
css.append(linkT2);

//Adds bootstrap Js
/* let linkT3 = document.createElement("script");
linkT3.setAttribute("src", "https://https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
linkT3.setAttribute("integrity", "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4");
linkT3.setAttribute("crossorigin", "anonymous");
body.append(linkT3); */









