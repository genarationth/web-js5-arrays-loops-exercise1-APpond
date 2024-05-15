// Exercise 1.1
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// Length of the array
console.log("Length of the array:", myAlphabet.length);

// Function to log the length of the array
function myAlphabetLength() {
    console.log("Length of the array:", myAlphabet.length);
}
myAlphabetLength();

// Exercise 1.2
let Planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

// Logging each item and its index in the array
Planets.forEach(function(planet, index) {
    console.log("Planet:", planet, "Index:", index);
});


// Exercise 1.3
let myArr = [ 1, 2, 'One', true];
myArr.forEach(function(member) {
    console.log(member);
});
