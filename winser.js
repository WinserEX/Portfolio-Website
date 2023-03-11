//CSS link
let css = document.querySelector("head");
//Adds CSS
let linkT = document.createElement("link");
linkT.setAttribute("rel", "stylesheet");
linkT.setAttribute("href", "winser.css");
css.append(linkT);

//Adds bootstrap
let linkT2 = document.createElement("link");
linkT2.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
linkT2.setAttribute("rel", "stylesheet");
linkT2.setAttribute("integrity", "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65");
linkT2.setAttribute("crossorigin", "anonymous");
css.append(linkT2);
