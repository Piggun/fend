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
function createAndAddNavbarElement(sectionTitle){       // Creates an element and adds it to the navbar, by taking sectionTitle as a parameter
    element = document.createElement("li");
    const elementContent = document.createTextNode(sectionTitle.innerText);
    element.classList.add("menu__link");
    element.appendChild(elementContent);
    navbarList.appendChild(element);
    return element;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const element1 = createAndAddNavbarElement(section1Title);
const element2 = createAndAddNavbarElement(section2Title);
const element3 = createAndAddNavbarElement(section3Title);
navbarList.style.cssText = "color: black; display: flex; justify-content: space-around; height: 40px;padding: 10px 0";
const navbarElementsList = navbarList.querySelectorAll("li");
for(i = 0; i < navbarElementsList.length; i++){
    navbarElementsList[i].style.cssText= "padding: 10px 0";     // Adds padding to every element inside navbarList
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
element1.addEventListener('click', function(){
    section1.scrollIntoView({behavior: "smooth"});
})
element2.addEventListener('click', function(){
    section2.scrollIntoView({behavior: "smooth"});
})
element3.addEventListener('click', function(){
    section3.scrollIntoView({behavior: "smooth"});
})
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


