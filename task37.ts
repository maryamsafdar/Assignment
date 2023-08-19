function make_shirt1(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Size: ${size.toUpperCase()} Shirt`);
    console.log(`Message: ${message}`);
}

make_shirt1();

make_shirt1("medium");

make_shirt1("small", "TypeScript is awesome!");
