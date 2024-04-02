import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";
import  './style.css'
// import MyBackground from './background.jpg';
    

// const myIcon  = new Image();
// myIcon.src = MyBackground;
// const body = document.getElementById('body');
// body.appendChild(myIcon);

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const contactButton = document.getElementById('contactButton');

//Clears previous content
const clearContent = function () {
    const content = document.getElementById('content');
    content.innerHTML = "";
}
//EventListeners for buttons
homeButton.addEventListener("click", () => {
    clearContent();
    homePage();
})

menuButton.addEventListener("click", () => {
    clearContent();
    menuPage();
})
contactButton.addEventListener("click", () => {
    clearContent();
    contactPage();
})
