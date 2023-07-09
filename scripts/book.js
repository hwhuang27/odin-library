class Book{
    constructor(title, author, status){
        this.title = title;
        this.author = author;
        this.status = status;
    }

    info() {
        return `${this.title} by ${this.author}, is ${this.status}`;
    }
}

export default Book;