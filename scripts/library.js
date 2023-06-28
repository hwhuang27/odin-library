let myLibrary = [];

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, is ${this.status}`;
}