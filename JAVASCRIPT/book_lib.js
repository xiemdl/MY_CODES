
class Book {
    constructor(title, author, yearPublished, isread){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.isread = isread;
    }

    getDetails(){
        return `${this.title} by ${this.author}, published in ${this.yearPublished}. Read: ${this.isread}`;
    }
}

class Library {
    constructor(){
        this.Book =  [];
    }

    addBook(Book) {
        this.Book.push(Book);
    }

    listBooks(){
        this.Book.forEach(Book => {
            console.log(Book.getDetails());
        });
    }

    toggleReadStatus(title) {
        const Book = this.Book.find(b => b.title === title);
        if (Book) {
            Book.isread = !Book.isread;
            console.log(`Read status of "${title}" is now ${Book.isread}`);
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
