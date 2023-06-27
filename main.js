
let myLibrary = [];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

Book.prototype.info = function(){
    const readYet = this.read ? 'read already' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pageNum} pages, ${readYet}`;
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('name1', 'author1', 123, true);
const book2 = new Book('name2', 'author2', 234, false);
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);

addBooktoLibrary(book1);
addBooktoLibrary(book2);
addBooktoLibrary(theHobbit);

myLibrary.forEach(book => {
    console.table(book);
});

const bookshelf = document.querySelector('.bookshelf');
