// example array declarations
let strArr: Array<string> = ['a', 'b', 'c'];
let numArr: Array<number> = [1, 2, 3];
let boolArr: Array<boolean> = [true, false, true];

// example functions
// method 1
function getStrFunc<T>(params: T): T {
    return params;
}

//method 2
const getNumFunc= <T>(args: T): T => args;


let ans1 = getStrFunc<string>('Hello');
console.log(ans1)
let ans2 = getNumFunc<number>(123);
console.log(ans2);

//custom generics
interface customInterface<T> {
    name: T,
    age: number,
    getDetails: () => {name: T, age: number}
}

let myObj: customInterface<string> = {
    name: 'Shakir',
    age: 26,
    getDetails() {
        return {
            name: this.name,
            age: this.age
        }
    }
}

console.log(myObj.getDetails());

//generic promise
let getData = async(): Promise<string> => {
    return 'Hello';
}

let res = getData();
console.log(res);

//sample test
let createArray = <T>(length: number, val: T): Array<T> => new Array(length).fill(val);

console.log(createArray<string>(3, 'Hello'));
console.log(createArray<number>(3, 123));

// // multi varable generics
let appendData = <T, U>(arr: Array<T | U>, data: U): Array<T | U> => {
    arr.push(data);
    return arr;
}

console.log(appendData<string, number>(['a', 'b', 'c', 345], 123));


//type constraint
function constrainedFunc<T extends string | number>(val: T): T {
    return val;
}

console.log(constrainedFunc("henlo"));
console.log(constrainedFunc(123));
console.log(constrainedFunc(true)); // Error: Argument of type 'boolean' is not assignable