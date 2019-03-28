"use strict"

let randomNumbers = []

function randomArray(length) {
  let arrayRandom = [];

  for (let i = 0; i < length; i++) {
    arrayRandom.push(Math.floor(Math.random() * 101));
  }
  return arrayRandom;
}

randomNumbers = randomArray(100);

console.log(randomNumbers);

// let oddNumbers = [];
// let evenNumbers = [];

function splitArray(arrayToSplit) {
  let toJunto = {
    odd: [],
    even: []
  };

  for (let i = 0; i < arrayToSplit.length; i++) {
    if (arrayToSplit[i] % 2 === 0) {
      toJunto.even.push(arrayToSplit[i]);
    } else {
      toJunto.odd.push(arrayToSplit[i]);
    }
  }
  return toJunto;
}

let oddAndEven = splitArray(randomNumbers);



console.log(oddAndEven.odd[3]);

// console.log(oddNumbers);
// console.log(evenNumbers);