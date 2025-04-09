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

// example 2
enum GenderEnum {
    Male,
    Female,
    Gay
};

const getDataEnum = (gen: GenderEnum) => {
    switch (gen) {
        case GenderEnum.Male:
            return "It's a boy";
        case GenderEnum.Female:
            return "It's a girl";
        case GenderEnum.Gay:
            return "It's infected";
        default:
            // only works if all conditional values are covered
            let checkVal: never = gen;
            console.log(checkVal);
            throw "It's a nothing";
    }
}

console.log(getDataEnum(GenderEnum.Male));
console.log(getDataEnum(GenderEnum.Female));
console.log(getDataEnum(GenderEnum.Gay));