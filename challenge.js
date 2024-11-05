//  Question
// Break a number down its minimal prime factor

const isPrime = (num) => {
    if (num < 4) {
        return true;
    }
    else {
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
};

const getFactors = (num) => {
    let sum = 0;
    let div = 2;
    while (num > 1) {
        if (num % div === 0) {
            sum += div;
            num /= div;
        } else {
            div += 1;
        }
    }
    return sum;
};

const getMinFactor = (num) => {
    if (isPrime(num))
        return num;
    return getMinFactor(getFactors(num));
};

console.log(getMinFactor(49));
