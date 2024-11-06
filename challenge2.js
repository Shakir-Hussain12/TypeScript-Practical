// question
// how many bugs can a frog eat

const X = [3]; //position of frog
const S = [5]; //size of tongue
const Y = [1, 2, 3 , 5, 7, 0, 5, 4]; //position of bugs

const canEat = (x, y, s) => Math.abs(x - y) <= s;

let index = 0;
let bugsEaten = [];

while (index < X.length) {
    let count = 0;
    for (let i = 0; i < Y.length; i++) {
        if(canEat(X[index], Y[i], S[index])) count += 1;
    }

    bugsEaten[index] = count;
    index += 1;
}

console.log(bugsEaten);