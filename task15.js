"use strict";
const guestList1 = [
    "Maryam Safdar",
    "Fatima Sfdar",
    "Asma Akram"
];
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`);
}
let removeGuest = "Maryam Safdar";
console.log(`${removeGuest} can not make it on the dinner`);
let inviteGuest = "Nida";
let removeGuestIndex = guestList1.indexOf(removeGuest);
if (removeGuestIndex !== -1) {
    guestList1[removeGuestIndex] = inviteGuest;
    console.log(`${removeGuest} can't make it on the dinner.`);
}
console.log(guestList1);
for (let j = 0; j < guestList1.length; j++) {
    console.log(`Dear ${guestList1[j]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`);
}
