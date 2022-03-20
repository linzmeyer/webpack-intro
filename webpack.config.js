const pages = require('./data/pages.js');


let entry = {}
for (const page of pages) {
  entry[page.output] = page.input;
}


module.exports = {
  entry: {...entry},  // code splitting per page
};
