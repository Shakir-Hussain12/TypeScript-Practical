class Book {
    title: string;
    authors: string[];

    constructor(title: string, authors: string[]) {
        this.title = title;
        this.authors = authors;
    }
}

const book = new Book("The Great Gatsby", ["F. Scott Fitzgerald"]);
console.log(book);