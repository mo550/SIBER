/** Header Functionality **/
let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 20) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
/* ----------------------------------------------------------------------- */

/** Navbar & Submenu Functionality **/
let navLinks = document.querySelectorAll('.navLinks > li');

navLinks.forEach((li) => {
  li.addEventListener('click', (e) => {
    navLinks.forEach((li) => {
      li.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  });
});
/* ----------------------------------------------------------------------- */

/* Toggle Menu Functionality */
const toggleBar = document.getElementById('toggleBar');
const navbar = document.querySelector('.header .navLinks');
 
toggleBar.addEventListener('click', () => {
  navbar.classList.toggle('show');
  toggleBar.classList.toggle('active');
});
/* ----------------------------------------------------------------------- */

/** Contact Us Functionality **/
const contactSection = document.getElementById('contact-us');
const contactToggle = document.getElementById('contact-toggle');
const contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', () => {
  contactSection.classList.add('show');
});

contactToggle.addEventListener('click', () => {
  contactSection.classList.remove('show');
  contactBtn.classList.remove('active');
});
/* ----------------------------------------------------------------------- */

/* Preloader Functionality */
let preLoader = document.getElementById("preloader");

window.onload = () => preLoader.style.display = "none";
/* ----------------------------------------------------------------------- */