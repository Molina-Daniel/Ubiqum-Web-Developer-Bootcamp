// Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.
// let input = prompt("Enter a number to reverse it!!");

// function reverseMe(itemToReverse) {
//   let reversed = String(itemToReverse).split("").reverse().join("");
//   return Math.sign(itemToReverse) * parseFloat(reversed);
// }

// console.log(reverseMe(input));

// Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.  Punctuation and numbers aren't passed in the string.
// let input = prompt("Enter a string to reverse it!");

// function reverseMe(itemToReverse) {
//   let reversed = "";
//   for (let i = itemToReverse.length - 1; i >= 0; i--) {
//     reversed += itemToReverse[i];
//   }
//   return reversed.replace(/[.]/g, "").replace(/[0-9]/g, "");
// }

// console.log(reverseMe(input));

// Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".
// let input = prompt("Enter a phrase to capitalize the first letter of each word");

// function capitalizeMe(stringToCapitalize) {
//   let lowerCase = String(stringToCapitalize).toLowerCase();

//   return lowerCase.replace(/(^| )(\w)/g, function capitalize(firstWordLetter) {
//     return firstWordLetter.toUpperCase();
//   })
// }

// console.log(capitalizeMe(input));

// Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".
let input = prompt("Enter a phrase to discover the longest word in it");

function longestFinder(finder) {
  var newArray = finder.split(" ");

  var longest = "";

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].length > longest.length) {
      let theCopy = newArray[i].slice();
      longest = theCopy;
    }
  }

  return longest;
}

console.log(longestFinder(input));

