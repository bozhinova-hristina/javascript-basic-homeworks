
console.log('-------test------')

let firstDiv = document.getElementById('first');
console.log(firstDiv);


let firstHeader = document.getElementById('myTitle');
firstHeader.innerText = "Hello there";


let firstParagraph = document.querySelector('.paragraph');
console.log(firstParagraph);
firstParagraph.innerText = "This is the first exercise of the class - DOM. I think is not a big deal. I can do this.";

let secondDiv = document.querySelector('.anotherDiv');
console.log(secondDiv);

let secondParagraph = document.querySelector('.second');
console.log(secondParagraph);

secondParagraph.innerText = "Well, i think Document Object Model is gonna be interesing.";

let text = document.getElementsByTagName('text');
console.log(text[0]);

text[0].innerText = "We can select elements and do whatever kind of change we want.";

let lastDiv = document.getElementsByTagName("div")[2];
console.log(lastDiv);

let header1last = lastDiv.getElementsByTagName("h1")[0];
console.log(header1last);

header1last.innerText = "All styles that you can access in CSS you can change in JavaScript, but with camelCase names";

let header3last = lastDiv.getElementsByTagName("h3")[0];
console.log(header3last);
header3last.innerText = "Maybe is not a good pracise but it was easier for me to see the text i am changing in console first...So, that is all for now, see you soon!";