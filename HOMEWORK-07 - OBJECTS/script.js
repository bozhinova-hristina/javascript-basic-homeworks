
// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs


function Animal(name, kind) {
 this.name = name;
 this.kind = kind;
 this.speak = function(message) {
   console.log(`${this.kind} says: ${message}`);
 }
}

let dog = new Animal("Lucy", "Dog");
dog.speak("Hey bro!!!"); 

let createButton = document.getElementById("create-animal");
createButton.addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let kind = document.getElementById("kind").value;
  let animal = new Animal(name, kind);
  console.log(animal);  
});

// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML



let book = {
 title: 'The Robots of Dawn',
 author: 'Isaac Asimov',
 readingStatus: true,
 info: function() {
   if (this.readingStatus) {
     return `Already read '${this.title}' by ${this.author}.`;
   } else {
     return `You still need to read '${this.title}' by ${this.author}.`;
   }
 }
};

console.log(book.info());

// let myBook = {
//  title: '',
//  author: '',
//  readingStatus: '',
//  info: function() {
//    if (this.readingStatus === 'true') {
//      return `Already read '${this.title}' by ${this.author}.`;
//    } else if (this.readingStatus === 'false') {
//      return `You still need to read '${this.title}' by ${this.author}.`;
//    } else {
//      return `Invalid reading status.`;
//    }
//  }
// };

// book.title = prompt('Enter the book title:');
// book.author = prompt('Enter the book author:');
// book.readingStatus = prompt('Enter the reading status (true or false):');

// console.log(book.info());