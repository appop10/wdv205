/*
    Contains 
    - function to show the navebar on smaller screens
*/

function showMenu() {
    let navbar = document.querySelector("nav div > ul");
    let hamburger = document.querySelectorAll("nav div > a span");
    let bar1 = hamburger[0];
    let bar2 = hamburger[1];
    
    navbar.classList.toggle("hamburger-menu");
    bar1.classList.toggle("top-bar");
    bar2.classList.toggle("bottom-bar");
}