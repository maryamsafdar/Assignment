let firstName:string = "Maryam safdar";
let lowercaseName: string = firstName.toLowerCase();
console.log("Lowercase:", lowercaseName);

let uppercaseName: string = firstName.toUpperCase();
console.log("Uppercase:", uppercaseName);

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

let titlecaseName: string = toTitleCase(firstName);
console.log("Titlecase:", titlecaseName);
