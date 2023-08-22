
const guestList3: string[] = [
    "Maryam Safdar",
    "Fatima Sfdar",
    "Asma Akram"
  ];
  
   for(let i=0; i<guestList3.length; i++){
     console.log(`Dear ${guestList3[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`);
    }

  let removeGuest2 = "Maryam Safdar";
  console.log( `${removeGuest2} can not make it on the dinner`);

  let inviteGuest2 ="Nida";
  let removeGuestIndex2 =guestList3.indexOf(removeGuest2);

  if(removeGuestIndex2 !== -1){
    guestList3[removeGuestIndex2] =inviteGuest2;
    console.log(`${removeGuest2} can't make it on the dinner.`);

  }
  console.log(guestList3);

  for(let j=0;j<guestList3.length;j++){
    console.log(`Dear ${guestList3[j]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`)
  }
  
console.log("Good news! We found a bigger dinner table.");

guestList3.unshift("Maryam");
guestList3.splice(3, 0, "Iqra");
guestList3.push("Laiba");

for(let k=0; k<guestList3.length ;k++)
{
    console.log(`Dear ${guestList3[k]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`)
}

console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two guests.");

while (guestList3.length > 2) {
    let removedGuest2 = guestList3.pop();
    console.log(`Sorry ${removedGuest2}, we can't invite you to dinner.`);
}

for (let l=0;l<guestList3.length;l++) {
    console.log(`Dear ${guestList3[l]}, you're still invited to dinner.`);
}

guestList3.length = 0;

console.log("Final guest list:", guestList3);