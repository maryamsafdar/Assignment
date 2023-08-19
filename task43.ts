// Function to show magician names
function show_magicians(magiciansArray: string[]): void {
  for (const magician of magiciansArray) {
      console.log(magician);
      //for (let i=0;i<=magiciansArray.length;i++)
  }
}

// Function to make magicians great
function make_great(magiciansArray: string[]): string[] {
  const modifiedMagicians: string[] = [];

  for (const magician of magiciansArray) {
      modifiedMagicians.push("the Great " + magician);
  }

  return modifiedMagicians;
}

// Original Magicians
const magicians1: string[] = ["Merlin", "Houdini", "Gandalf", "Copperfield"];
console.log("Original Magicians:");
show_magicians(magicians1);

// Great Magicians
const greatMagicians: string[] = make_great(magicians1);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

// Unchanged Magicians
console.log("\nUnchanged Magicians:");
show_magicians(magicians1);
 