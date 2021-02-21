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

const pageHeader = document.querySelector(".page__header");
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




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavbar(){
    for(let item of sections){
        let element = document.createElement("li");
        element.innerText = item.getAttribute("data-nav");
        element.classList.add("menu__link");
        navbarList.appendChild(element)
    };
};


// add class 'your-active-class' to section when element on navbar is clicked
function setAsActive(){
    sections.forEach((element, index) =>{
        navbarElementsList[index].addEventListener('click', function(){     // add EventListener to every element in navbar
            sections.forEach((element, index) =>{
               element.classList.remove("your-active-class");});        // remove class 'your-active-class' from every section
            element.classList.add("your-active-class");})       // add class 'your-active-class' to corresponding section
        });
};


// Add class 'active' to element in navbar when corresponding section is in viewport
function setNavbarElActive(){
    sections.forEach((element, index) =>{       // loop through every section
        let box = element.getBoundingClientRect();
        if(box.top <= 150 && box.bottom >= 150){        // if section is in viewport
            navbarElementsList[index].classList.add("active");      // add class 'active' to element in navbar
        }
        else{
            navbarElementsList[index].classList.remove("active");       // remove class 'active' from element in navbar
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


// Hide navbar when scrolling down
function hideNavbar(){
    let startingScrollPos = window.pageYOffset;     // Assigns starting scroll position
    window.addEventListener('scroll',function(){
        let currentScrollPosition = window.pageYOffset;     // Assigns current scroll position
        if(startingScrollPos > currentScrollPosition){      // If scrolling up
            pageHeader.style.top = "0";     // Keeps navbar visible
        }
        else{
            pageHeader.style.top = "-60px";     // Hides navbar
        }
        startingScrollPos =  currentScrollPosition;     // Updates startingScrollPos to the current scroll position
    })
};


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 
createNavbar();
navbarList.style.cssText = "color: black; display: flex; justify-content: space-around; height: 40px; padding: 10px 0";
const navbarElementsList = navbarList.querySelectorAll("li");
for(i = 0; i < navbarElementsList.length; i++){
    navbarElementsList[i].style.cssText= "padding: 10px 5px";     // Adds padding to every element inside navbarList
};


// Scroll to section on link click
scrollToSection();


// Set sections as active
setAsActive();
document.addEventListener('scroll', function(){
    setNavbarElActive();
});


// Hide navbar when scrolling down
hideNavbar();