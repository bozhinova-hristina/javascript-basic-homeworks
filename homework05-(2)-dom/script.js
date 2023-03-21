
// HOMEWORK PART 2
// Print all numbers from an array and the sum
// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)



let numbers = [2, 4, 5];
let numbersList = document.createElement("ul");
for (let i = 0; i < numbers.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = numbers[i];
  numbersList.appendChild(listItem);
}
document.body.appendChild(numbersList);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let sumParagraph = document.createElement("p");
sumParagraph.innerHTML = "Sum: " + sum;
document.body.appendChild(sumParagraph);

// Bonus: Print the equation
let equation = numbers.join(" + ") + " = " + sum;
let equationParagraph = document.createElement("p");
equationParagraph.innerHTML = equation;
document.body.appendChild(equationParagraph);