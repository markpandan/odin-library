const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const submit = document.querySelector("button[type='submit']");
const libraryContainer = document.querySelector(".library-container");

let myLibrary = [];

function Book() {
  this.author = "No Author";
  this.title = "No Title";
  this.pages = "0";
  this.isRead = null;
}

function addBookToLibrary(author, title, pages, isRead) {
  let book = new Book();
  book.author = author;
  book.title = title;
  book.pages = pages;
  book.isRead = isRead;

  myLibrary.push(book);
  console.log(myLibrary);
}

function displayBookLibrary() {
  libraryContainer.textContent = "";
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("library-card");
    card.setAttribute("data-index", index);

    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;
    card.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;
    card.appendChild(authorElement);

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.pages}`;
    card.appendChild(pagesElement);

    const isReadElement = document.createElement("p");
    isReadElement.textContent = `Status: ${book.isRead ? "Read" : "Not Read"}`;
    card.appendChild(isReadElement);

    const btnToggleRead = document.createElement("button");
    btnToggleRead.classList.add = "toggle-read";
    btnToggleRead.textContent = book.isRead ? "Mark As Unread" : "Mark As Read";
    card.appendChild(btnToggleRead);

    const btnDeleteBook = document.createElement("button");
    btnDeleteBook.classList.add = "delete-book";
    btnDeleteBook.textContent = "Delete";
    card.appendChild(btnDeleteBook);

    libraryContainer.appendChild(card);
  });
}

// For opening the dialog
const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("#open-dialog");
openDialog.addEventListener("click", () => dialog.showModal());

const closeDialog = document.querySelector("#close-dialog");
closeDialog.addEventListener("click", (e) => {
  dialog.close();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(author.value, title.value, pages.value, isRead.checked);
  author.value = "";
  title.value = "";
  pages.value = "";
  isRead.checked = false;

  displayBookLibrary();
  dialog.close();
});
