import Book from './book.js';

class Library {
    constructor(){
        this.library = [];
    }

    addBook(title, author, status){
        const newBook = new Book(title, author, status);
        this.library.push(newBook);
    }
}

export default Library;