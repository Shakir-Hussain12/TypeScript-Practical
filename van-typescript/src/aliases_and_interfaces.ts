type Employee = {
    id: number;
    name: string;
    department: string;
};

type Manager = {
    id: number;
    name: string;
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