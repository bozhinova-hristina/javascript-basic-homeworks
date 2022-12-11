console.log('---------HOMEWORK PART 1---------')
//-----OBJECT----
function Book(type, author) {
 this.type = type;
 this.author = author;
}
function objFunc() {
 let book = new Book("The Ego and the Id", "Sigmund Freud");
 return book;
}
console.log(objFunc());

//----BOOLEAN----

function booleanFunc(num1, num2) {
 let result = num1 > num2;
 return result;
}
console.log(booleanFunc(2, 3));

//----NUMBER-----

function sumOfTwoNumbers(num1, num2) {
 let result = num1 + num2;
 return result;
}
console.log(sumOfTwoNumbers(5, 92));


//----STRING-----

function string () {
let text = "Hello";
return text;
}
console.log(string());

//----UNDEFINED----

function test(t) {
 if (t === undefined) {
   return 'Undefined';
 }
 return t;
}

let x;
console.log(test(x));



console.log('---------VTORO RESHENIE-------');

// NE ZNAM DALI JA RAZBRAV ZADACATA PA IMAM DVE RESENIJA I NE ZNAM DALI SE VO RED AHAHHAHA

function testFunc(x)
{
 return typeof x;
}

console.log(testFunc(new Object));
console.log(testFunc(true));
console.log(testFunc(1));
console.log(testFunc("Hello"));
console.log(testFunc(undefined));



console.log('---------HOMEWORK PART 2---------');



let humanYear= parseInt(prompt("Calculate your dog's age:"));

function calculateDogsAge(year) {
 let dogAge = year * 7;
 console.log(`Your dog is ${dogAge} years old`);
}
calculateDogsAge(humanYear);

//----BONUS----
let dogYear= parseInt(prompt("Calculate human age:"));

function calculateHumanAge(year) {
 let humanAge = year / 7;
 console.log(`Human age is ${humanAge} years old`);
}
calculateHumanAge(dogYear);


console.log('---------HOMEWORK PART 3---------');


let userInput = parseInt(prompt("How much money you need?"));
let amount = 50000;
let finalAmount = amount - userInput;
if ( userInput > amount) {
 console.log('Not enough money');
}
else {
 console.log(`The user has withdrawn: ${userInput}, the ATM has ${finalAmount} left`);
}
