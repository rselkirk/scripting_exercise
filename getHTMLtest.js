var getHTML = require('./http-functions');

console.log(getHTML);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html.length);
}


getHTML(requestOptions, printHTML);
