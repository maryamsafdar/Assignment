const magicians: string[] = ["Magician1", "Magician2", "Magician3", "Magician 4"];

function show_magician(magicians: string[]): void {
    for (let i=0;i<magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great1(magiciansArray: string[]): void {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = "the Great " + magiciansArray[i];
    
    }
}
console.log("Original Magicians:");
show_magician(magicians);

make_great1(magicians);

console.log("\nGreat Magicians:");
show_magician(magicians);


    