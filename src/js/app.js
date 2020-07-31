/* global Chart */
import {dataSource} from '../db/data.js';
import Links from './components/Links.js';
import Banners from './components/Banners.js';


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
      link.addEventListener('click', function(event) {
        const clickedElement = this;
        event.preventDefault();
        //console.log(clickedElement);
        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){

    for (let page of this.pages){
      page.classList.toggle('page--active', page.id == pageId);
    }

    for (let link of this.navLinks){
      link.classList.toggle(
        'page--active',
        link.getAttribute('href') == '#' + pageId
      );
    }

    this.toggleMenu(false);
  },

  toggleMenu: function(visible) {
    const thisApp = this;

    thisApp.navigation = document.querySelector('.navigation').classList.toggle('menu--active', visible);
    thisApp.navigationTop = document.querySelector('.topbar__navigation').classList.toggle('menu--active', visible);
  },

  initMobileMenu: function(){

    this.toggle = document.querySelector('.logo__mobile-menu-link').addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
  },

  initData: function(){

    this.data = dataSource;
  },

  initLinksTable: function(){

    for (let linkData in this.data.links){
      new Links (linkData, this.data.links[linkData]);
    }
  },

  initBannersTable: function(){
    const thisApp = this;

    for (let bannerData in thisApp.data.banners){
      new Banners (bannerData, thisApp.data.banners[bannerData]);
    }
  },

  closeModal: function(){
    const thisApp = this;

    thisApp.overlay = document.getElementById('overlay').classList.remove('show');
    console.log(thisApp.overlay);
  },

  initCloseModal: function(){

    this.btnClose = document.querySelectorAll('#overlay .js--close-modal').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeModal();
      });
    });

    this.overlayBg = document.querySelector('#overlay').addEventListener('click', (e) => {
      if(e.target === this) {
        this.closeModal();
      }
    });

    this.esc = document.addEventListener('keyup', (e) => {
      if(e.keyCode === 27) {
        this.closeModal();
      }
    });
  },

  openModal: function(modal) {

    this.modals = document.querySelectorAll('#overlay > *').forEach((modal) => {
      modal.classList.remove('show');
    });

    this.overlay = document.querySelector('#overlay').classList.add('show');
    this.modal = document.querySelector(modal).classList.add('show');
  },

  initOpenModal: function() {

    this.btnInitModal = document.querySelectorAll('.btn-primary').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal('#myModal');
      });
    });
  },

  initChart: function() {

    const ctx = document.getElementById('myChart').getContext('2d');

    this.chart = new Chart(ctx, this.data.chart);
  },

  init: function(){

    this.initData();
    this.initPages();
    this.initLinksTable();
    this.initBannersTable();
    this.initMobileMenu();
    this.initCloseModal();
    this.initOpenModal();
    this.initChart();
  }
};

app.init();
