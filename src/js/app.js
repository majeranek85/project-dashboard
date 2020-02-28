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

    thisApp.toggleMenu(false);
  },

  toggleMenu: function(visible) {
    const thisApp = this;

    thisApp.navigation = document.querySelector('.navigation').classList.toggle('active', visible);
    thisApp.navigationTop = document.querySelector('.topbar__navigation').classList.toggle('active', visible);
  },

  initMobileMenu: function(){
    const thisApp = this;

    thisApp.toggle = document.querySelector('.logo__mobile-menu-link').addEventListener('click', function(e) {
      e.preventDefault();
      thisApp.toggleMenu();
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

  initChart: function() {
    const thisApp = this;

    const ctx = document.getElementById('myChart').getContext('2d');

    thisApp.chart = new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          hidden: true,
        }]
      },
    });
  },

  init: function(){
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    thisApp.initLinksTable();
    thisApp.initBannersTable();
    thisApp.initMobileMenu();
    thisApp.initCloseModal();
    thisApp.initOpenModal();
    thisApp.initChart();
  }
};

app.init();
