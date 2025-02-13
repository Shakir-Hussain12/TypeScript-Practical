//  Question
// Break a number down its minimal prime factor

let startingNum: number = 15;

const isPrime = (num: number): boolean => {
    if (num < 4) {
        return true;   
    } else {
        for (let i = 2; i <= num / 2; i++){
            if (num % i === 0) {
                return false;
            }
        }
    }

    return true;
}

const getFactors = (num: number): number => {
    let sum: number = 0;
    let div: number = 2;

    while(num > 1) {
        if (num % div === 0) {
            sum += div
            num /= div
        } else {
            div += 1
        }
    }

    return sum
}

const getMinFactor = (num: number): number => {
    if (isPrime(num)) return num

    return getMinFactor(getFactors(num))
}

console.log(getMinFactor(49))