/* global utils, dataSource, Handlebars */

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

  init: function(){
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    thisApp.initLinksTable();
    thisApp.initMobileMenu();
  }
};

class Links {
  constructor(id, data){
    const thisLinks = this;

    thisLinks.id = id;
    thisLinks.data = data;

    thisLinks.renderInLinks();
  }

  renderInLinks(){
    const thisLinks = this;

    const generatedHTML = Handlebars.compile(document.querySelector('#template-links-table').innerHTML)(thisLinks.data);
    
    thisLinks.element = utils.createDOMFromHTML(generatedHTML);
    
    const tableContainer = document.querySelector('.links__table-body');
    
    tableContainer.appendChild(thisLinks.element);
  }
}

app.init();
