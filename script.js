import displayBookLibrary from "./components/displayBookLibrary.js";

const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const submit = document.querySelector("button[type='submit']");
const libraryContainer = document.querySelector(".library-container");

let myLibrary = [];

class Book {
  constructor(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// For opening the dialog
const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("#open-dialog");
openDialog.addEventListener("click", () => dialog.showModal());

const closeDialog = document.querySelector("#close-dialog");
closeDialog.addEventListener("click", (e) => {
  dialog.close();
});

function addBookToLibrary(author, title, pages, isRead) {
  let book = new Book(author, title, pages, isRead);

  myLibrary.push(book);
  console.log(myLibrary);
}

submit.addEventListener("click", (e) => {
  author.setCustomValidity("");
  title.setCustomValidity("");
  pages.setCustomValidity("");

  if (author.value == "") {
    author.setCustomValidity("Please enter the author.");
    return;
  }
  if (title.value == "") {
    title.setCustomValidity("Please enter the title.");
    return;
  }
  if (pages.value <= 0) {
    pages.setCustomValidity("Please enter a valid page number.");
    return;
  }

  e.preventDefault();
  addBookToLibrary(author.value, title.value, pages.value, isRead.checked);
  author.value = "";
  title.value = "";
  pages.value = "";
  isRead.checked = false;

  displayBookLibrary(libraryContainer, myLibrary);
  dialog.close();
});
