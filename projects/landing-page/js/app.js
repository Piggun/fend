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
const sections = document.querySelectorAll("section");

const section1 = document.getElementById("section1");

const section2 = document.getElementById("section2");

const section3 = document.getElementById("section3");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createNavbar(){
    for(let item of sections){
        let element = document.createElement("li");
        element.innerText = item.getAttribute("data-nav");
        element.classList.add("menu__link");
        navbarList.appendChild(element)
    };
};

createNavbar();


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

navbarList.style.cssText = "color: black; display: flex; justify-content: space-around; height: 40px; padding: 10px 0";
const navbarElementsList = navbarList.querySelectorAll("li");
for(i = 0; i < navbarElementsList.length; i++){
    navbarElementsList[i].style.cssText= "padding: 10px 5px";     // Adds padding to every element inside navbarList
}

// Add class 'active' to section when near top of viewport

function setNavbarElActive(){
    sections.forEach((element, index) =>{
        let box = element.getBoundingClientRect();
        if(box.top <= 150 && box.bottom >= 150){
            console.log("in viewport: " + element.id);
            navbarElementsList[index].classList.add("active");
        }
        else{
            navbarElementsList[index].classList.remove("active");
        }})
};

// Scroll to section using scrollIntoView event
function scrollToSection(){
    for(let i = 0; i < navbarElementsList.length; i++){
        navbarElementsList[i].addEventListener('click', function(){
            sections[i].scrollIntoView({behavior: "smooth"});
        });
    };
};
scrollToSection();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

function setAsActive(){
    sections.forEach((element, index) =>{
        navbarElementsList[index].addEventListener('click', function(){
            sections.forEach((element, index) =>{
               element.classList.remove("your-active-class");});
        element.classList.add("your-active-class");})
        });
};

setAsActive();


document.addEventListener('scroll', function(){
    setNavbarElActive();
});
