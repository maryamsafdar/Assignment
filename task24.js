"use strict";
let string1 = 'Banana';
let string2 = 'Maryam';
let number1 = 10;
let number2 = 20;
let array = [3, 5, 7, 9, 11];
// Tests for equality and inequality with strings
console.log("Is string1 equal to 'Banana'?");
console.log(string1 === 'Banana');
console.log("Is string2 not equal to 'Maryam'?");
console.log(string2 !== 'Maryam');
// Tests using the lower case function
console.log("Is string1 in lowercase equal to 'Banana'? ");
console.log(string1.toLowerCase() === 'Banana');
// Numerical tests
console.log("Is number1 greater than number2?");
console.log(number1 > number2);
console.log("Is number2 greater than or equal to number1? ");
console.log(number2 >= number1);
// Tests using "and" and "or" operators
console.log("Is number1 less than 15 and number2 greater than 15? I predict True.");
console.log(number1 < 15 && number2 > 15);
console.log("Is number1 greater than 5 or number2 less than 10? ");
console.log(number1 > 5 || number2 < 10);
// Test whether an item is in an array
console.log("Is 5 in the array?");
console.log(array.includes(5));
// Test whether an item is not in an array
console.log("Is 6 not in the array? ");
console.log(array.includes(6));
