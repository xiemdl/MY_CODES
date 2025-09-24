// this code defines a simple library system where you can add books, list them, and toggle their read status.

// This class represents a book in the library.
class Book {
    constructor(title, author, yearPublished, isread){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.isread = isread;
    }

    // Method to get book details
    getDetails(){
        return `${this.title} by ${this.author}, published in ${this.yearPublished}. Read: ${this.isread}`;
    }
}

// This class represents the library which contains multiple books.
class Library {
    constructor(){
        this.books =  [];
    }

    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Method to list all books in the library
    listBooks(){
        this.books.forEach(book => {
            console.log(book.getDetails());
        });
    }

    // Method to toggle the read status of a book by title
    toggleReadStatus(title) {
        // Find the book by title
        const book = this.books.find(b => b.title === title);
        // If found, toggle its read status
        if (book) {
            book.isread = !book.isread;
            console.log(`Read status of "${title}" is now ${book.isread}`);
        // If not found, log a message
        } else {
            console.log(`Book titled "${title}" not found.`);
        }
    }

}



const myLibrary = new Library();

myLibrary.addBook(new Book("The Rain in España", "4reuminct", 2020 , true));
myLibrary.addBook(new Book("Safe Skies Archer", "4reuminct", 2020, true));
myLibrary.addBook(new Book("Chasing the Sun", "4reuminct", 2020, false));
myLibrary.addBook(new Book("Avenues of the Diamond", "4reuminct", 2020, false));
myLibrary.addBook(new Book("Golden Scenery of Tomorrow", "4reuminct", 2020, false));


myLibrary.listBooks();
