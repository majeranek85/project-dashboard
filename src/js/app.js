
import {dataSource} from '../db/data.js';
import Links from './components/Links.js';


const app = {
  initPages: function(){

    const thisApp = this;

    thisApp.pages = document.querySelector('#pages').children;
    thisApp.navLinks = document.querySelectorAll('.navigation__link');

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for (let page of thisApp.pages){
      page.classList.toggle('active', page.id == pageId);
    }

    for (let link of thisApp.navLinks){
      link.classList.toggle(
        'active',
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initMobileMenu: function(){
    const mobileMenu = document.querySelector('.navigation');
    const mobileTopbar = document.querySelector('.topbar__navigation');
    const hamburger = document.querySelector('.logo__mobile-menu-link');

    hamburger.addEventListener('click', function(event){
      event.preventDefault();
      mobileMenu.classList.toggle('active');
      mobileTopbar.classList.toggle('active');
    });
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = dataSource;
  },

  initLinksTable: function(){
    const thisApp = this;

    for (let linkData in thisApp.data.links){
      new Links (linkData, thisApp.data.links[linkData]);
    }
  },

  closeModal: function(){
    const thisApp = this;

    thisApp.overlay = document.getElementById('overlay').classList.remove('show');
    console.log(thisApp.overlay);
  },

  initCloseModal: function(){
    const thisApp = this;

    thisApp.btnClose = document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        thisApp.closeModal();
      });
    });

    thisApp.overlayBg = document.querySelector('#overlay').addEventListener('click', function(e) {
      if(e.target === this) {
        thisApp.closeModal();
      }
    });

    thisApp.esc = document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        thisApp.closeModal();
      }
    });
  },

  openModal: function(modal) {
    const thisApp = this;

    thisApp.modals = document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show');
    });

    thisApp.overlay = document.querySelector('#overlay').classList.add('show');
    thisApp.modal = document.querySelector(modal).classList.add('show');
  },

  initOpenModal: function() {
    const thisApp = this;

    thisApp.btnInitModal = document.querySelectorAll('.btn-primary').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        thisApp.openModal('#myModal');
      });
    });
  },

  init: function(){
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    thisApp.initLinksTable();
    thisApp.initMobileMenu();
    thisApp.initCloseModal();
    thisApp.initOpenModal();
  }
};

app.init();
