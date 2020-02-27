export const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let template = document.createElement('template');
  template.innerHTML = htmlString.trim();
  return template.content.firstChild;
};