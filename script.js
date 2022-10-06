let myLibrary = [];
const cardContainer = document.getElementById("card-container");
let curAuthor = 'hm';
let curTitle = '';
let curPages = '';
let curRead = false;

function Book (author, title, pages, read) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function displayBooks() {
    for (let prop in myLibrary) {
        let i = 1;
        let cell = document.createElement("div");
        cardContainer.appendChild(cell).className = "card";
        cell.id = `card-item${i}`;
        i += 1;
    }
}

/*const addButton = document.getElementById("addButton");
addButton.addEventListener('click', addBookToLibrary);*/

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

function getAuthor() {
    let authorField = document.getElementById('author').value;
    curAuthor = authorField;
}
function getTitle() {
    let titleField = document.getElementById('title').value;
    curTitle = titleField;
}

function getPages() {
    let pagesField = document.getElementById('pages').value;
    curPages = pagesField;
}

function getRead() {
    let checkField = document.getElementById('checkbox');
    if (checkField.checked == true) {
        curRead = true;
    } else {
        curRead = false;
    }
}

const submitButton = document.querySelector('#submitButton');
// submitButton.addEventListener('click', getAuthor);
// submitButton.addEventListener('click', getTitle);
// submitButton.addEventListener('click', getPages);
// submitButton.addEventListener('click', getRead);

function woah() {
    getAuthor();
    getTitle();
    getPages();
    getRead();
    const newBook = new Book(curAuthor, curTitle, curPages, curRead);
    addBookToLibrary(newBook);
    displayBooks();
    console.log(newBook);
    console.log(myLibrary);
}

submitButton.addEventListener('click', woah);
