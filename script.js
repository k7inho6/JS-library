let myLibrary = [];
const container = document.getElementById("card-container");

function Book (author, title, pages, read) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(Book) {
    prompt('aaa');
    myLibrary.push(Book);
}

function displayBooks() {
    for (prop in myLibrary) {
        let i = 1;
        let cell = document.createElement("div");
        container.appendChild(cell).className = "card";
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