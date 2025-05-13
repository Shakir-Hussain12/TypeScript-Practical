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