console.log('It works')
let css = document.querySelector("head");
let linkT = document.createElement("link");
linkT.setAttribute("rel", "stylesheet");
linkT.setAttribute("href", "winser.css");
css.append(linkT);