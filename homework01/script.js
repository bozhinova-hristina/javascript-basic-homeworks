var totalPhones = 30;
var taxRate = (5 / 100);
var onePhonePrice = 119.95;
var taxPrice = onePhonePrice * taxRate;
var totalOnePhonePrice = onePhonePrice + taxPrice;
var totalPrice = totalOnePhonePrice * totalPhones;
console.log(`Total phone price is ${totalPrice}$`);