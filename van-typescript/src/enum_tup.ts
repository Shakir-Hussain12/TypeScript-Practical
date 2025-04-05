// basic codes for working with enum and tuples in typescript

// tuple examples
let tuple: [number, string] = [1, "Hi"];
// console.log(tuple[0]); // 1
// console.log(tuple[1]); // Hi

tuple.push('Yo');
tuple.push(2);
// tuple.push(true);  // can't add boolean
// console.log(tuple);

// let person: [string, string, boolean] = ["John", "Married", true];
// console.log(person);

//enum examples
enum Sample {
    first,
    second
};

console.log(Sample)