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
  myLibrary.forEach((book) => {});
}

// For opening the dialog
const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("#open-dialog");
openDialog.addEventListener("click", () => dialog.showModal());

const closeDialog = document.querySelector("#close-dialog");
closeDialog.addEventListener("click", (e) => {
  dialog.close();
  e.preventDefault();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(author.value, title.value, pages.value, isRead.checked);
  author.value = "";
  title.value = "";
  pages.value = "";
  isRead.checked = false;

  displayBookLibrary();
});
