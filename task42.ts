
// Define an array of magician names
const magicians: string[] = ["Merlin", "Houdini", "Gandalf", "Copperfield"];

// Function to show magician names
function show_magicians1(magiciansArray: string[]): void {
    for (const magician of magiciansArray) {
        console.log(magician);
    }
}

// Function to make magicians great
function make_great1(magiciansArray: string[]): void {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = "the Great " + magiciansArray[i];
    
    }
}

// Show original magician names
console.log("Original Magicians:");
show_magicians1(magicians);

// Make magicians great
make_great1(magicians);

// Show modified magician names
console.log("\nGreat Magicians:");
show_magicians1(magicians);


    