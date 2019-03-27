"use strict"

// Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop.
let classNames = ["Raul", "Oscar", "Sergi", "Richard", "Xavi", "Samu", "Patricia", "Daniel"];

console.log(classNames.sort()); // Print the array sort alphabetically

console.log(classNames[0]); // Print the first element

console.log(classNames.slice(-1)[0]); // Print the last element

console.log(classNames[classNames.length - 1]); // Print the last element

for (let i = 0; i < classNames.length; i++) {
  console.log(classNames[i]); // Print all the elements
}

// Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.
let classAges = [23, 42, 26, 19, 34, 29, 25, 28];
let index = 0;

while (index < classAges.length) {
  if (classAges[index] % 2 === 0) {
    console.log(classAges[index]);
  }
  index++;
}

for (let i = 0; i < classAges.length; i++) {
  if (classAges[i] % 2 === 0) {
    console.log(classAges[i]);
  }
}

// Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.
// Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.
function lowestNumber(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  // let result = "El mínimo es: " + min + ". Y el máximo es: " + max;
  return [min, max];
}

console.log(lowestNumber(classAges));

// Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function printIndex(array, index) {
  let print = array[index];
  return print;
}

console.log(printIndex(array, index));

// Exercise 6: Write a function which receives an array and only prints the values that repeat.
let numbs = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

console.log(numbs.includes(numbs[4]));

//1. que coja el primer valor del array
//2. que busque otro valor igual en el array
//3. si lo hay, que lo imprima
//4. que vuelva a empezar con el segundo valor

function printRepeats(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && result.includes(array[i]) === false) {
        result.push(array[i]);
      }
    }
  }
  return result;
}

console.log(printRepeats(numbs));

// function printRepeats2(arra1) {
//   var repeatedCounter = {};
//   var result = [];

//   arra1.forEach(function (item) {
//     if (!repeatedCounter[item])
//       repeatedCounter[item] = 0;
//     repeatedCounter[item] += 1;
//   })

//   for (var prop in repeatedCounter) {
//     if (repeatedCounter[prop] >= 2) {
//       result.push(prop);
//     }
//   }

//   return result;

// }

// Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string.
let myColor = ["Red", "Green", "White", "Black"];

function stringMe(array) {
  return array.join();
}

console.log(stringMe(myColor));