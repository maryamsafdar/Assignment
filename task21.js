"use strict";
const countries_name = ["USA", "Canada", "Germany", "Japan", "Australia"];
console.log("List of countries:", countries_name);
const countryObjects = [
    {
        name: "USA",
        capital: "Washington, D.C.",
        population: 331002651,
        language: "English",
    },
    {
        name: "Canada",
        capital: "Ottawa",
        population: 37742154,
        language: "English, French",
    },
    {
        name: "Germany",
        capital: "Berlin",
        population: 83783942,
        language: "German",
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 126476461,
        language: "Japanese",
    },
    {
        name: "Australia",
        capital: "Canberra",
        population: 25499884,
        language: "English",
    },
];
console.log("Information about the countries:");
for (let i = 0; i < countries.length; i++) {
    console.log(`Name: ${countries[i]}`);
    console.log(`Capital: ${countries[i]}`);
    console.log(`Population: ${countries[i]}`);
    console.log(`Language: ${countries[i]}`);
    console.log("-------------");
}
