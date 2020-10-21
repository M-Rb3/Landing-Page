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

// building nav items using section id
section = document.querySelectorAll('section');
nav = document.querySelector('.navbar-nav');
const fragment = document.createDocumentFragment();
section.forEach(
  function(currentValue) {
    const id = currentValue.id;
    const newElement = document.createElement('li');
    newElement.classList.add('nav-item');
    const anch = document.createElement('a');
    anch.setAttribute('class', 'nav-link');
    anch.setAttribute('href', '#'+id)
    anch.textContent = id;
    newElement.appendChild(anch);
    fragment.appendChild(newElement);
  }
);
nav.appendChild(fragment);

//  nav solid top while scrolling
window.addEventListener('scroll', function(e) {
  const nav = document.querySelector('.navbar');
  const pos = window.scrollY > 0;
  if (pos) {
    nav.classList.add('solid', 'bg-dark');
  } else {
    nav.classList.remove('solid', 'bg-dark');
  }

});
// let navlinks = document.querySelectorAll(".nav-link");
// let currentURL = window.location.href;
// for (var i = 0; i < navlinks.length; i++) {
//   if (navlinks[i]==currentURL) {
//     navlinks[i].classList.add('active');
//   }
// }



// Add class 'active' to section when near top of viewport

var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
  document.querySelectorAll("section").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
  document.querySelector(`#${id}`).classList.add("active");
};
