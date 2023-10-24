"use strict";
const guestList4 = [
    "Maryam Safdar",
    "Fatima Sfdar",
    "Asma Akram"
];
for (let i = 0; i < guestList4.length; i++) {
    console.log(`Dear ${guestList4[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`);
}
let removeGuest3 = "Maryam Safdar";
console.log(`${removeGuest3} can not make it on the dinner`);
let inviteGuest3 = "Nida";
let removeGuestIndex3 = guestList4.indexOf(removeGuest3);
if (removeGuestIndex3 !== -1) {
    guestList4[removeGuestIndex3] = inviteGuest3;
    console.log(`${removeGuest3} can't make it to the dinner.`);
}
console.log(guestList4);
for (let j = 0; j < guestList4.length; j++) {
    console.log(`Dear ${guestList4[j]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`);
}
console.log("Good news! We found a bigger dinner table.");
guestList4.unshift("Maryam");
guestList4.splice(3, 0, "Iqra");
guestList4.push("Laiba");
for (let k = 0; k < guestList4.length; k++) {
    console.log(`Dear ${guestList4[k]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`);
}
console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two guests.");
while (guestList4.length > 2) {
    let removedGuest3 = guestList4.pop();
    console.log(`Sorry ${removedGuest3}, we can't invite you to dinner.`);
}
for (let l = 0; l < guestList4.length; l++) {
    console.log(`Dear ${guestList4[l]}, you're still invited to dinner.`);
}
guestList4.length = 0;
console.log("Final guest list:", guestList4);
console.log(`We are inviting ${guestList4.length} people to dinner.`);
