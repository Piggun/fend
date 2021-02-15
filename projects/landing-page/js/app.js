/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById("navbar__list");
const section1 = document.getElementById("section1");
const section1Title = section1.getElementsByTagName('h2')[0];

const section2 = document.getElementById("section2");
const section2Title = section2.getElementsByTagName('h2')[0];

const section3 = document.getElementById("section3");
const section3Title = section3.getElementsByTagName('h2')[0];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createAndAddNavbarElement(sectionTitle){       // Creates an element and adds it to the navbar, by taking sectionTitle as an attribute
    const element = document.createElement("li");
    const elementContent = document.createTextNode(sectionTitle.innerText);
    element.appendChild(elementContent);
    navbarList.appendChild(element);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

createAndAddNavbarElement(section1Title);
createAndAddNavbarElement(section2Title);
createAndAddNavbarElement(section3Title);
navbarList.style.color = "black";
navbarList.style.float = "left";

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


