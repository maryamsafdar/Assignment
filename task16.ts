const guestList2: string[] = [
    "Maryam Safdar",
    "Fatima Sfdar",
    "Asma Akram"
  ];
  
   for(let i=0; i<guestList2.length; i++){
     
      console.log(`Dear ${guestList2[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`);
    
  }
  let removeGuest1 = "Maryam Safdar";
  console.log( `${removeGuest1} can not make it on the dinner`);
  let inviteGuest1 ="Nida";
  let removeGuestIndex1 =guestList2.indexOf(removeGuest1);
  if(removeGuestIndex1 !== -1){
    guestList2[removeGuestIndex1] =inviteGuest1;
    console.log(`${removeGuest1} can't make it to the dinner.`);

  }
  console.log(guestList2);
  for(let k=0;k<guestList2.length;k++){
    console.log(`Dear ${guestList2[k]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`)
  }
  
console.log("Good news! We found a bigger dinner table.");
guestList2.unshift("Maryam");
guestList2.splice(Math.floor(guestList2.length / 2), 0, "Iqra");
guestList2.push("Laiba");
for(let l=0; l<guestList2.length ;l++)
{console.log(`Dear ${guestList2[l]}, you are cordially invited to dinner. Please join us for an evening of great conversation.`)}