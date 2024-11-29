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

type Staff = Employee | Manager;

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

let emp4: Employee = {
    id: 7,
    [attr]: 'Shakir',
    department: 'FS'
}

console.log(emp4);
emp4[attr] = 'Changed';
console.log(emp4);