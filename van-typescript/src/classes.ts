class Book {
     
    private readonly test = false;
    constructor (
        private title: string, 
        private authors: string[]
    ) {}

    get getDetails(): { title: string, authors: string[] } {
        return {
            title: this.title,
            authors: this.authors
        };
    }

    isAlterable(): boolean {
        // this.test = true; // This line is intentionally incorrect to demonstrate the error
        return this.test;
    }
}

const book = new Book("The Great Gatsby", ["F. Scott Fitzgerald"]);
console.log(book.getDetails);
console.log("Is book alterable?", book.isAlterable());

interface GenPerson {
    name: string;
    age: number;
    getDetails : { name: string; age: number };
    greet(): string;
}

class Person implements GenPerson {

    constructor(public readonly name: string, public readonly age: number) {}

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    get getDetails(): { name: string; age: number} {
        return {
            name: this.name,
            age: this.age
        };
    }
}

const person = new Person("Alice", 30);
console.log(person.greet());
console.log(person.getDetails);