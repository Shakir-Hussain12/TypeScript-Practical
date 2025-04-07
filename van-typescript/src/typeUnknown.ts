let unknownValue: unknown;

// can hold multiple values since no fixed type is assigned
unknownValue = 123; 
unknownValue = "hello"; 
unknownValue = true; 
unknownValue = [1, 2, 3, 4, 5]; 
 
//typechecks
if (typeof unknownValue === 'number') {
    unknownValue += 5;
} else if (typeof unknownValue === 'string') {
    unknownValue.charAt(0).toUpperCase();
} else if (typeof unknownValue === 'boolean') {
    unknownValue != unknownValue;
} else if (unknownValue instanceof Array) { 
    // Object.preventExtensions(unknownValue); //prevents addition of properties
    unknownValue[0] = 9; // will work
    // Object.freeze(unknownValue); // prevents change to values alongside above
    unknownValue[0] = 9; // won't work
    unknownValue.push(6);
}

//sample practical example
const getData = () => {
    const random = Math.random();

    if (random < 0.5) throw new Error("Value less than 0.5"); 
    throw "Value greater than 0.5";
};

try {
    getData();
} catch (error) {
    if (error instanceof(Error)) {
        console.log(error.message)
    } else {
        console.log(error);
    }
}