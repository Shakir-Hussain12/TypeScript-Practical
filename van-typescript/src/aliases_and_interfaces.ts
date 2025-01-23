const attr = 'name';
type Employee = {
    id: number;
    [attr]: string;
    department: string;
};

type Manager = {
    id: number;
    [attr]: string;
    employees: Employee[];
};

// Unionizing Types - either of the given types
type Staff = Employee | Manager;

// let emp4: Employee = {
//     id: 7,
//     [attr]: 'Shakir',
//     department: 'FS'
// }

// console.log(emp4);
// emp4[attr] = 'Changed';
// console.log(emp4);

const printStaffDetails = (emp: Staff): void => {
    if ('employees' in emp) {
        console.log(`Manager: ${emp.name}`);
        console.log(emp.employees.length);
    } else {
        console.log(`Employee: ${emp.name}`);
        console.log(`Department: ${emp.department}`);
    }
}

let emp1: Employee = {id: 1, name: 'John', department: 'IT'};
let emp2: Employee = {id: 2, name: 'Jane', department: 'HR'};
let emp3: Manager = {id: 1, name: 'Johnson', employees: [emp1, emp2]};

printStaffDetails(emp3);

//intersecting types - merges two types
type Book = { 
    isbn: number, 
    title: string, 
    price: number,
    // methods
    functions: ((...args: any[]) => void)[]
};
// type Discount = {discount: number}
// type DiscountedBook = Book & Discount;
 
let Book1: Book = {
    isbn: 12345,
    title: 'Book 1',
    price: 20,
    functions: [
        () => console.log("First Function"),
        (message?: string) => console.log(`${message} ${Book1.title}`),
        (message?: string, amount?: number) => console.log(`${message} = ${(amount ? amount : 0) * Book1.price} `)
    ]
}

// let Book2: DiscountedBook = {
//     isbn: 12345,
//     title: 'Book 2',
//     price: 25,
//     discount: 10,
// }

console.log(Book1);
// Book1.functions[0]();
// Book1.functions[1]('The Title is ');
// Book1.functions[2]('Total Price', 5);
// console.log(Book2);
 