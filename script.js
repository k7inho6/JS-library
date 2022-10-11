/*let myLibrary = [];*/
const cardContainer = document.getElementById("card-container");
/*let curAuthor = 'hm';
let curTitle = '';
let curPages = '';
let curRead = false;*/

class Book {
    constructor(author = 'Unknown', title = 'Unknown', pages = '0', read = false) {
        this.author = author,
        this.title = title,
        this.pages = pages,
        this.read = read
    }
}

class Library { 
    constructor() {
        this.books = [];
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }

    addBookToLibrary(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook);
        }
    }

    removeBookFromLibrary(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }
}

const library = new Library();

function resetCardContainer() {
    cardContainer.innerHTML = '';
}

const createCard = (book) => {
    const bookCard = document.createElement('div');
    const author = document.createElement('p');
    const title = document.createElement('p');
    const pages = document.createElement('p');

    const buttonContainer = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');

    bookCard.classList.add('book-card');
    bookCard.classList.add('rounded');
    buttonContainer.classList.add('card-button-container');

    if (book.read) {
        read.classList.add('btn', 'btn-success');
    } else {
        read.classList.add('btn', 'btn-danger');
    }

    remove.classList.add('btn', 'btn-dark', 'remove-button');

    read.setAttribute('id', 'read-button');
    remove.setAttribute('id', 'remove-button');

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(title);
    bookCard.appendChild(pages);
    bookCard.appendChild(buttonContainer);

    buttonContainer.appendChild(read);
    buttonContainer.appendChild(remove);

    author.textContent = `${book.author}`;
    title.textContent = `"${book.title}"`;
    pages.textContent = `${book.pages}`;
    read.textContent = 'Read';
    remove.textContent = 'Remove';

    cardContainer.appendChild(bookCard);
}

function displayBooks() {
    resetCardContainer();
    for (let book of library.books) {
        console.log(book);
        createCard(book);
    }
}

const openModalButtons = document.querySelector('#addButton');
const closeModalButtons = document.querySelector('#closeButton');
const overlay = document.getElementById('overlay');

let modal = document.querySelector('#modal');
modal.classList.add('rounded');

closeModalButtons.addEventListener('click', closeModal);
openModalButtons.addEventListener('click', openModal);

let input = document.querySelectorAll('input');
for (let elem of input) {
    elem.classList.add('rounded');
}

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


function getBook() {
    const authorField = document.getElementById('author').value;
    const titleField = document.getElementById('title').value;
    const pagesField = document.getElementById('pages').value;
    const checkField = document.getElementById('checkbox').checked;

    const newBook = new Book(authorField, titleField, pagesField, checkField);
    return newBook;
}

function submitAction() {
    library.addBookToLibrary(getBook());
    displayBooks();
    closeModal();
}

function addAction() {
    const form = document.querySelector('form');
    const authorField = document.getElementById('author');
    const titleField = document.getElementById('title');
    const pagesField = document.getElementById('pages');
    const checkField = document.getElementById('checkbox');

    authorField.value = null;
    titleField.value = null;
    pagesField.value = null;
    checkField.checked = false;
    openModal();
}

const addButton = document.getElementById("addButton");
addButton.addEventListener('click', addAction);

const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', submitAction)

const sampleBook = new Book('Peepo', 'PeepoAdventures', '24', true);
library.books.push(sampleBook);

displayBooks();