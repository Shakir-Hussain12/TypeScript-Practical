let ex: any = 'Hi, This is a string';

// Using type assertion to treat 'ex' as a string
let len: number = (ex as string).length
console.log(len);
 
let animalObject = `{
    "name": "Monty",
    "breed": "Labrador" 
}`;

let humanObject = `{
    "name": "John",
    "age": 30
}`;

let human = JSON.parse(humanObject);
let animal = JSON.parse(animalObject);

console.log(human);
console.log(animal);