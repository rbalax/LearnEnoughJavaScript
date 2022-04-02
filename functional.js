let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// using forEach loop
function imperativesUrl(elements) {
  let urls = [];
  elements.forEach(element => {
    urls.push(urlify(element))
  });
  return urls;
}
console.log(imperativesUrl(states));

// using map

function functionalUrl(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrl(states));


// exercise

function fullUrl(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`)
};

console.log(fullUrl(states));
