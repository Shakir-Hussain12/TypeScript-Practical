type Car = {
    brand: string;
    model: string;
}

const car: Car = {
    brand: 'Toyota',
    model: 'Corolla',
}

type Product = {
    name: string;
    price: number;
}

const product: Product = {
    name: 'Laptop',
    price: 1000,
}

type Student = {
    name: string;
    age: number;
}

const student: Student = {
    name: 'John',
    age: 20,
}

//first Method - using union operator
function getName<T extends Student | Product | Car>(obj: T): string {
    return 'name' in obj ? obj.name : 'No name property';
}

console.log(getName(student)); //will work as T extends student
console.log(getName(product)); //won't work even though product has name property, unless it is extended to T
console.log(getName(car)); // no name property in car

// second method - using object or named property
let getNameProp = <T extends {name: string}>(obj: T): string => {
    return obj.name;
}
console.log(getNameProp(student));
console.log(getNameProp(product));
// car has no name property, so it will throw an error
// console.log(getNameProp(car)); 