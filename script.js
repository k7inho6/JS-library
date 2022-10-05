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

const addButton = document.getElementById("addButton");
addButton.addEventListener('click', addBookToLibrary);

let modal = document.querySelector('div#modal');
modal.classList.add('rounded');

let input = document.querySelectorAll('input');
for (let elem of input) {
    elem.classList.add('rounded');
}