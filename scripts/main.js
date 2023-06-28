
// delete entries with button
// toggle status read / not read

const book_name = document.querySelector('#book');
const book_author = document.querySelector('#author');
const book_status = document.querySelector('#status');
const book_submit = document.querySelector('.submit-btn');
const table = document.querySelector('.data-table');

book_submit.addEventListener('click', (event) => {
    updateLibrary();
    displayLibrary();
    event.preventDefault();
});

function updateLibrary(){
    if(book_name.value === "" || book_author.value === ""){
        alert("Please fill out all the fields.");
        return;
    }
    const newBook = new Book(book_name.value, book_author.value, book_status.value);
    book_name.value = "";
    book_author.value = "";
    book_status.selectedIndex = 0;
    myLibrary.push(newBook);
}

function displayLibrary(){
    while(table.hasChildNodes()){
        table.removeChild(table.lastChild);
    }
    myLibrary.forEach(book => {
        displayBook(book);
    });
}

function displayBook(book){
    const row = document.createElement('tr');
    const title_col = document.createElement('td');
    const author_col = document.createElement('td');
    const status_col = document.createElement('td');
    const delete_col = document.createElement('td');
    const status_btn = document.createElement('button');
    const delete_btn = document.createElement('button');

    title_col.textContent = book.title;
    author_col.textContent = book.author;
    if (book.status === 'read') {
        status_btn.textContent = 'Read';
        status_btn.classList.add('read-btn');
    }
    else if (book.status === 'unread') {
        status_btn.textContent = 'Not Read';
        status_btn.classList.add('unread-btn');
    }
    delete_btn.textContent = 'Delete';
    delete_btn.classList.add('button-primary');

    status_col.appendChild(status_btn);
    delete_col.appendChild(delete_btn);
    row.appendChild(title_col);
    row.appendChild(author_col);
    row.appendChild(status_col);
    row.appendChild(delete_col);
    table.appendChild(row);
}

myLibrary.push(new Book('Golden Kamuy', 'Satoru Noda', 'read'));
myLibrary.push(new Book('Chainsaw Man', 'Tatsuki Fujimoto', 'unread'));
displayLibrary();