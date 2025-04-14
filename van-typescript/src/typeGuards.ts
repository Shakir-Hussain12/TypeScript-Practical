// different way to enforce typeGuards 

//example 1

type someVal = string | number | boolean;

const checkValue = (val: someVal): void => {
    if (typeof val === 'string') {
        console.log('string', val.toLowerCase());
        return;
    }
    else if (typeof val === 'number') {
        console.log('number', val.toPrecision(2));
        return;
    }
    else if (typeof val === 'boolean') {
        console.log('boolean', val);
        return;
    }
    else {
        console.log('unknown', val);
        return; 
    }
}