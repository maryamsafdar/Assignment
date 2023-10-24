"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number1 of numbers) {
    let ordinal = "";
    if (number1 == 1) {
        ordinal = "st";
    }
    else if (number1 == 2) {
        ordinal = "nd";
    }
    else if (number1 == 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${number1}${ordinal}`);
}
