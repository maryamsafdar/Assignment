function make_shirt1(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Made a ${size} shirt with the message: ${message}.`);
}

make_shirt1();

make_shirt1("medium");

make_shirt1("small", "TypeScript is awesome!");
