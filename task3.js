"use strict";
let firstName = "Maryam safdar";
let lowercaseName = firstName.toLowerCase();
console.log("Lowercase:", lowercaseName);
let uppercaseName = firstName.toUpperCase();
console.log("Uppercase:", uppercaseName);
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
let titlecaseName = toTitleCase(firstName);
console.log("Titlecase:", titlecaseName);
