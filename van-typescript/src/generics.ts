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