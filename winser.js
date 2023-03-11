//Head tag
let css = document.querySelector("head");
//Body tag
let body = document.querySelector("body");

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
let linkT3 = document.createElement("script");
linkT3.setAttribute("src", "https://https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
linkT3.setAttribute("integrity", "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4");
linkT3.setAttribute("crossorigin", "anonymous");
body.append(linkT3);


