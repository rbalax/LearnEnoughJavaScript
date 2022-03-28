let states = ["Kansas", "Nebrasca", "North Dakota", "South Dakota"]

// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(element.toLowerCase().split(/\s+/).join("-"));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));

// function functionalUrls(elements) {
//   return elements.map(element => element.toLowerCase().split(/\s+/).join("-"));
// }


// for (i = 0; i < functionalUrls(states).length; i++) {
// console.log(`https://www.${functionalUrls(states)[i]}.com`)
// }

//singles imperative
function imperativesSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

console.log(imperativesSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));


let numbers = [1,2,3,4,5,6,7,8,9,10];
//task sum

function imperativeSum(elements) {
  total = 0;
  elements.forEach(function (n) {
    total += n;
  })
  return total
}

// console.log(functionalSum(numbers));

// function functionalSum(elements) {
//   elements.reduce((total, n) => { return total += n; });
// }

// console.log(functionalSum(numbers));
// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));
