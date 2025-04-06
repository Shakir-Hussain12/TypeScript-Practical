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
// basic enum example
enum Sample {
    first,
    second
}; 
console.log(Sample)

// enum with numerically assigned values
enum Second {
    first = 1,
    second = 2
}
console.log(Second);

// enum with string values
enum StringEnum {
    first = 'first',
    second = 'second'
}
console.log(StringEnum);

// enum with a string and a number
enum Third {
    first = 1,
    second = 'second',
}
console.log(Third);


//working with re-assignment - number vs string
enum numType {
    value = 1,
}; 
let test: numType = 1;
console.log(test);

// this will throw an error because enum doesn't allow re-assignment of string values
// enum strType {
//     value = 'First',
// };
// let test2: strType = 'First';
// console.log(test2);

// sample exercise
enum UserRole {
    Admin = 'Admin',
    Manager = 'Manager',
    Employee = 'Employee',
}

type User = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string];
};

let createUser = (user: User): User => {
    let userDetails: User = user;
    return userDetails; 
}

console.log("output here");
console.log(createUser({
    id: 1,
    name: "John Doe",
    role: UserRole.Admin,
    contact: ['john@example.com', '123-456-7890']
}));