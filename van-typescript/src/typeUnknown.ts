let unknownValue: unknown;

// can hold multiple values since no fixed type is assigned
unknownValue = 123; 
unknownValue = "hello"; 
unknownValue = true; 
unknownValue = [1, 2, 3, 4, 5]; 
 
//typechecks
if (typeof unknownValue === 'number') {
    unknownValue += 5;
} else if (typeof unknownValue === 'string') {
    unknownValue.charAt(0).toUpperCase();
} else if (typeof unknownValue === 'boolean') {
    unknownValue != unknownValue;
} 