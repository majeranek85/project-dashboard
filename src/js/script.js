
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* Mobile navigation */
const mobileMenu = document.querySelector('.navigation');
const mobileTopbar = document.querySelector('.topbar__navigation');
//console.log(mobileMenu);

const hamburger = document.querySelector('.logo__mobile-menu-link');
//console.log(hamburger);

hamburger.addEventListener('click', function(event){
  event.preventDefault();
  mobileMenu.classList.toggle('active');
  mobileTopbar.classList.toggle('active');
});

/* Page activation */
const pages = document.querySelector('#pages').children;
//console.log(this.pages);
const navLinks = document.querySelectorAll('.navigation__link');
//console.log(this.navLinks);

const activatePage = function(pageId) {

  for (let page of pages){
    page.classList.toggle('active', page.id == pageId);
  }

  for (let link of navLinks){
    link.classList.toggle(
      'active',
      link.getAttribute('href') == '#' + pageId
    );
  }
};

const idFromHash = window.location.hash.replace('#/', '');

let pageMatchingHash = pages[0].id;

for (let page of pages){
  if(page.id == idFromHash){
    pageMatchingHash = page.id;
    break;
  }
}

activatePage(pageMatchingHash);

for (let link of navLinks){
  link.addEventListener('click', function(event){
    const clickedElement = this;
    event.preventDefault();

    const id = clickedElement.getAttribute('href').replace('#', '');

    activatePage(id);

    window.location.hash = '#/' + id;
  });
}

  