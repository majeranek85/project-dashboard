/* global Handlebars */
import {utils} from '../utils.js';

class Banners {
  constructor(id, data){
    const thisBanners = this;

    thisBanners.id = id;
    thisBanners.data = data;

    thisBanners.renderInLinks();
  }

  renderInLinks(){
    const thisBanners = this;

    const generatedHTML = Handlebars.compile(document.querySelector('#template-links-table').innerHTML)(thisBanners.data);

    thisBanners.element = utils.createDOMFromHTML(generatedHTML);

    const tableContainer = document.querySelector('.banners__table-body');

    tableContainer.appendChild(thisBanners.element);
  }
}

export default Banners;