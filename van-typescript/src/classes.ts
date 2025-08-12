class Book {
    
    private title: string;
    private authors: string[];

    constructor(title: string, authors: string[]) {
        this.title = title;
        this.authors = authors;
    }

    getDetails(): { title: string; authors: string[] } {
        return {
            title: this.title,
            authors: this.authors
        };
    }
}

const book = new Book("The Great Gatsby", ["F. Scott Fitzgerald"]);
console.log(book.getDetails());