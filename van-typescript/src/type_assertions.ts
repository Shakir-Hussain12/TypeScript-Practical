let ex: any = 'Hi, This is a string';

// Using type assertion to treat 'ex' as a string
let len: number = (ex as string).length
console.log(len);

interface Animal {
    name: string; 
    breed: string;
};

let animalObject = `{
    "name": "Monty",
    "breed": "Labrador" 
}`;

let humanObject = `{
    "name": "John",
    "age": 30
}`;

// Using type assertion to treat Objects as an Animal object
let human = JSON.parse(humanObject) as Animal;
let animal = JSON.parse(animalObject) as Animal;

console.log(human); // No error, but you can't access age property because it is not part of the Animal interface
console.log(animal);