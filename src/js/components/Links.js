/* global Handlebars */
import utils from '../utils.js';

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

export default Links;