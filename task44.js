"use strict";
function orderSandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Items:");
        for (let i = 0; i <= items.length; i++) {
            console.log("- " + items);
        }
    }
    console.log("===============================");
}
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Tomato");
orderSandwich("Bacon", "Egg", "Avocado", "Mayo");
