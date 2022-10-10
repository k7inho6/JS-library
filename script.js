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
    buttonContainer.classList.add('card-button-container');
    read.classList.add('btn', 'btn-light');
    remove.classList.add('btn', 'btn-light');

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
        createCard(book);
    }
}

const openModalButtons = document.querySelector('#addButton');
//const closeModalButtons = document.querySelector('#closeButton');
const overlay = document.getElementById('overlay');

let modal = document.querySelector('#modal');
modal.classList.add('rounded');

//closeModalButtons.addEventListener('click', closeModal);
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


const getBook = () => {
    const authorField = authorField = document.getElementById('author').value;
    const titleField = document.getElementById('title').value;
    const pagesField = document.getElementById('pages').value;
    const checkField = document.getElementById('checkbox').checked;

    return new Book(authorField, titleField, pagesField, checkField);
}

const woah = () => {
    library.addBookToLibrary(getBook);
    displayBooks();
}

const addButton = document.getElementById("addButton");
addButton.addEventListener('click', openModal);

const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', woah)

const sampleBook = new Book('Peepo', 'PeepoAdventures', '24', true);
library.books.push(sampleBook);

displayBooks();