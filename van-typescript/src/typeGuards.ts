// // different way to enforce typeGuards 

// //example 1

// type someVal = string | number | boolean;

// const checkValue = (val: someVal): void => {
//     if (typeof val === 'string') {
//         console.log('string', val.toLowerCase());
//         return;
//     }
//     else if (typeof val === 'number') {
//         console.log('number', val.toPrecision(2));
//         return;
//     }
//     else if (typeof val === 'boolean') {
//         console.log('boolean', val);
//         return;
//     }
//     else {
//         console.log('unknown', val);
//         return; 
//     }
// }

// // example 2: using === or !== operator
// type Dog = {
//     type: 'dog';
//     name: string;
//     bark(): void;
// }

// type Cat = {
//     type: 'cat';
//     name: string;
//     meow(): void;
// };

// type Animal = Dog | Cat;

// const makeSound = (animal: Animal): void => {
//     if (animal.type === 'dog') {
//         animal.bark();
//     } else if (animal.type === 'cat') {
//         animal.meow();
//     } else {
//         console.log('unknown animal type');
//     }
// };

// // using in operator

// const makeSound2 = (animal: Animal): void => {
//     if ('bark' in animal) {
//         animal.bark();
//     } else {
//         animal.meow();

//     }
// }

// //truthy and falsy guard
// const printLen = (str: string | null | undefined): void => {
//     if (str) {
//         console.log(str.length);
//     } else {
//         console.log("val is either null or undefined");
//     }
// }

// //instance of operator
// const checkType = (val: string | Date): string => {
//     if (val instanceof Date) {
//         return val.toDateString();
//     } 

//     return 'Normal String';
// }

// //type predicate 
// type Fish = {
//     swim(): void;
// };

// type Bird = {
//     fly(): void;
// };

// type Creature = Fish | Bird;
// let elem: Creature = Math.random() > 0.5 ? {
//     swim: () => console.log('swimming')
// } : {
//     fly: () => console.log('flying')
// };

// const isFish = (elem: Creature): elem is Fish => {
//     // return 'swim' in elem; // using in operator
//     return (elem as Fish).swim !== undefined; // type assertion
// }
 
// if (isFish(elem)) {
//     elem.swim();
// } else {
//     elem.fly();
// }

// //discrimated union and exhaustive checking
type Increment = {
    type: 'increment';
    amount: number;
};

type Decrement = {
    type: 'decrement';
    amount: number;
};

type Reset = {
    type: 'reset';
    amount: number;
};

type Action = Increment | Decrement | Reset;

const Reducer = (action: Action = {
    type: 'increment',
    amount: 0
}, val?: number): Action => {
    switch (action.type) {
        case 'increment':
            return {
                type: 'increment',
                amount: action.amount + (val ? action.amount : 0),
            }
        case 'decrement':
            return {
                type: 'decrement',
                amount: action.amount - (val ? action.amount : 0),
            }
        case 'reset':
            return {
                type: 'reset',
                amount: 0,
            }
        default:
            let exhaustiveCheck: never = action; // triggered only when there's an unhandled type
            throw(`Unhandled action type: ${exhaustiveCheck}`);
    }
}

console.log(Reducer({
    type: 'reset',
    amount: 5,
}));