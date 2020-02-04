
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* Mobile navigation */
const mobileMenu = document.querySelector('.navigation');

//console.log(mobileMenu);

const hamburger = document.getElementById('mobile-menu');
//console.log(hamburger);

hamburger.addEventListener('click', function(event){
  event.preventDefault();
  mobileMenu.classList.toggle('active');
});

/* Page activation */
