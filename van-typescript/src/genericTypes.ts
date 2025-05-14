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