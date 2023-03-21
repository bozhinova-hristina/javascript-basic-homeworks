console.log('---------Chinese Zodiac caluclation-------');
//--------IF/ELSE

let birthYear = parseInt(prompt('Calculate chinese zodiac by given year:'));
let zodiacFormula = (birthYear - 4) % 12;
// if (zodiacFormula == 0) {
//  console.log (`Your chinese zodiac sign is RAT`);
// }
// else if (zodiacFormula == 1) {
//  console.log (`Your chinese zodiac sign is Ox`);
// }
// else if (zodiacFormula == 2) {
//  console.log (`Your chinese zodiac sign is Tiger`);
// }
// else if (zodiacFormula == 3) {
//  console.log (`Your chinese zodiac sign is Rabbit`);
// }
// else if (zodiacFormula == 4) {
//  console.log (`Your chinese zodiac sign is Dragon`);
// }
// else if (zodiacFormula == 5) {
//  console.log (`Your chinese zodiac sign is Snake`);
// }
// else if (zodiacFormula == 6) {
//  console.log (`Your chinese zodiac sign is Horse`);
// }
// else if (zodiacFormula == 7) {
//  console.log (`Your chinese zodiac sign is Goat`);
// }
// else if (zodiacFormula == 8) {
//  console.log (`Your chinese zodiac sign is Monkey`);
// }
// else if (zodiacFormula == 9) {
//  console.log (`Your chinese zodiac sign is Rooster`);
// }
// else if (zodiacFormula == 10) {
//  console.log (`Your chinese zodiac sign is Dog`);
// }
// else if (zodiacFormula == 11) {
//  console.log (`Your chinese zodiac sign is Pig`);
// }
// else {
//  console.log('There is no such zodiac sign');
// }

//SWITCH
switch (zodiacFormula) {
 case 0:
  console.log(`Your chinese zodiac sign is RAT`);
  break;
 case 1:
  console.log(`Your chinese zodiac sign is Ox`);
  break;
 case 2:
  console.log(`Your chinese zodiac sign is Tiger`);
  break;
 case 3:
  console.log(`Your chinese zodiac sign is Rabbit`);
  break;
 case 4:
  console.log(`Your chinese zodiac sign is Dragon`);
  break;
 case 5:
  console.log(`Your chinese zodiac sign is Snake`);
  break;
 case 6:
  console.log(`Your chinese zodiac sign is Goat`);
  break;
 case 7:
  console.log(`Your chinese zodiac sign is Goat`);
  break;
 case 8:
  console.log(`Your chinese zodiac sign is Monkey`);
  break;
 case 9:
  console.log(`Your chinese zodiac sign is Rooster`);
  break;
 case 10:
  console.log(`Your chinese zodiac sign is Dog`);
  break;
 case 11:
  console.log(`Your chinese zodiac sign is Pig`);
  break;
 default:
  console.log('There is no such zodiac sign');
  break;
} 