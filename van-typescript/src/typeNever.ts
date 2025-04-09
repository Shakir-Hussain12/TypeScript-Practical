//can't assign value
// let someVal:never = 0; 

//example 1
type Gender =  'Male' | 'Female';

const getData = (gen: Gender) => {
    if (gen == 'Male') return 'Hi, John';
    else if (gen == 'Female') return 'Hi, Jessica';
    gen; //never type
}

console.log(getData('Male'));
console.log(getData('Female'));