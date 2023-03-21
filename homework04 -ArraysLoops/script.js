console.log('-------HOMEWORK #1---------');

// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert


function tellStory(story) {
  console.log(`My name is ${story[0]}. I am actually very positiv girl, but today i am so ${story[1]}, it's weekend and i am ${story[2]}.`)
}


tellStory(['Hristina', 'tired', 'trying to do the whole homework']);



console.log('-------HOMEWORK #2---------');

// Write a function that will take an array of 5 numbers as an argument and return the sum. Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
function sumArray(ourArray) {
  let sum = 0;

for (let i = 0; i < ourArray.length; i ++ ){
  sum += ourArray[i];
}
return sum;
}
console.log(sumArray([1, 8, 4, 7, 9]));


console.log('-------GET A VALID NUMBER BONUS--------');


let arr = [1, 5, 10, , 6, -1, "5B", false, true, "A"];

function validateNumber(array){
 

  for (let element of array){
    if(typeof(element) == "number"){
    console.log(element);
    }
    else
    console.log(`The ${element} is not a number`);
    
}
}
validateNumber(arr);




console.log('-------HOMEWORK #3---------');

// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"
 

let storyArr = ["Hello", "there", "students", "of", "SEDC", "!"];
function story(stringArray)
{
//   let bigString = "";
//   for (let el of stringArray){
//     bigString += el + " ";
//   }
//   console.log(bigString);
// }
// story(storyArr);


let bigString = "";
for (let i = 0; i < stringArray.length; i++)
{
  if(i == 4 || i == 5)
  bigString += stringArray[i];
  else
  bigString += stringArray[i] + " ";
  
}
console.log(bigString);
}
story(storyArr);

console.log('-------HOMEWORK #4---------');

// HOMEWORK #4
// Title: Looping structures
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.



for (let i = 1; i <= 20; i++){
  console.log(i);
  if (i % 2 == 0)
  console.log('\n');
  else
  console.log(" ");
}
// Nekako ne go razbrav momentot so \n  i empty space....


console.log('-------HOMEWORK #5---------');

// HOMEWORK #5
// Title: Looping structures
// Description: Write a JavaScript function that will return: the sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
// Bonus: Try making the function work if there are other types of items in it

let givenArray = [null, 3, 5, '', 6, 8, , undefined, 11, NaN];

function findMinAndMax(array) {
  let min = Infinity;
  let max =-Infinity;

  for (const number of array){
    if (typeof(number) !== 'number')
      continue;
    if(number > max) {
      max = number;
    }
    if(number < min) {
      min = number;
    }
  }
  return `The max is ${max}, the min is: ${min}, the total is: ${max+min}`;
  
}
console.log(findMinAndMax(givenArray));



console.log('-------HOMEWORK #6---------');
// HOMEWORK #6
// Title: Looping structures
// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new
// array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstArray = ["Bob", "Jill"];
let lastArray =  ["Gregory", "Wurtz"];
function fullNames(fisrtArray, lastArray){
 let full= [];

 for (let i = 1; i <= firstArray.length; i++) {
  full.push (i + ". " + firstArray[i - 1] + " " + lastArray[i - 1]);
 }
 console.log(full);
}
fullNames(firstArray, lastArray);