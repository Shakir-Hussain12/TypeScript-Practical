console.log('TS practical');

// Variables
// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
// orderStatus = 'shipped';
// orderStatus = 'delivered';

// let name: string | undefined;
// console.log(name?.length)

// Arrays
// let discount: number | string = 20;
// discount = '20%';
// let arr: number[] = [1, 2, 3, 4, 5];
// arr.push()
// let arr: (number | boolean)[] = [1, 2, 3, 4, 5, false, true, false];
// console.log(arr);

//Objects
// let car: {brand: string, model: string, year: number} = {brand: 'BMW', model: 'X5', year: 2020};
// car.brand = 'Mazda';
// car.brand = 123;
// car.color = 'red';
// console.log(car);

// let item1 = {brand: 'Mazda', model: 'CX-5', year: 2020};
// let item2 = {brand: 'Mitsubishi', model: 'MB-10'};

// let items:{brand: string, model: string, year?: number}[] | undefined = [item1, item2];
// items.push({brand: 'Toyota', model: 'Mitsubishi'})
// console.log(items);

// functions
// function greet(name: string){
//     return 'Hello' + name;
// }

// const greet = (name: string) => 'Hello ' + name;

// console.log(greet('Shakir'));

// function calculate(price: number): number { return price * 0.8; }
// const calculate = (price: number): number => price * 0.8;
// console.log(calculate(100));

// let names: string[] = ['Shakir', 'Mushahid', 'Asghar', 'Bob', 'Alice'];

// const doesExist = (findName: string): boolean => {
//     const exists = names.filter((name) => name === findName);
//     console.log(exists);
//     return exists.length > 0 ? true : false; 
// }

// console.log(doesExist('Hussain'));

//default and undefined parameters
// const calculatePrice = (price: number, discount?: number): number => price - (discount || 0);
// console.log(calculatePrice(100, 20));

// const calculateScore = (initScore: number, penalty: number = 0): number => initScore - penalty;
// console.log(calculateScore(100));

// const processInput = (arg: number | string): void => {
//     if (typeof(arg) === 'string'){
//         console.log(arg.toUpperCase());
//     } else {
//         arg = arg * 2;
//         console.log(arg)
//     }
// }

// processInput(2);

// const createEmp = ({ id, check }: {id: number, check?: boolean}): {id: number, isActive?: boolean} => {
//     return {id, isActive: check ? true : false};
// }

// console.log(createEmp({id: 1}));


// Aliases & interfaces
