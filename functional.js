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


// filter

// Peudo code

 // Define an array to store single-word strings.
 // For each element in the list, push it to the storage array
 // if splitting it on whitespace yields an array with length 1.



 function imperatoveSingles(elements) {
  let singleWordStates = [];
  elements.forEach(element => {
    if (element.split(/\s+/).length === 1) {
     singleWordStates.push(element);
    }
   });
   return singleWordStates;
 }

  console.log(imperatoveSingles(states));

  //using filter JS

  function filterSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
  }

  console.log(filterSingles(states));

  // exercise

  function filterSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
  }

  console.log(filterSingles(states));


  // reduce

  let numbers = [1,2,3,4,5,6,7,8,9,10];

  // Imperative Sum

  function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(element) {
      total += element;
    });
    return total;
  };
  console.log(imperativeSum(numbers));


  function imperativeMultiply(elements) {
    let total = 1;
    elements.forEach(function(element) {
      total *= element;
    });
    return total;
  };
  console.log(imperativeMultiply(numbers));






// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));
