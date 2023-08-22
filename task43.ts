function show_magicians(magicians: string[]): void {
  for (let i=0;i<magicians.length; i++) {
      console.log(magicians[i]);
  }
}


function make_great(magiciansArray: string[]): string[] {
  const modifiedMagicians: string[] = [];
for (let i=0;i<magiciansArray.length;i++) {
      modifiedMagicians.push("the Great " + magiciansArray[i]);
  }
return modifiedMagicians;
}

const magicians1: string[] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];
console.log("Original Magicians:");
show_magicians(magicians1);

const greatMagicians: string[] = make_great(magicians1);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

console.log("\nUnchanged Magicians:");
show_magicians(magicians1);
 


