export default function displayBookLibrary(libraryContainer, myLibrary) {
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
    btnToggleRead.classList.add("toggle-read");
    btnToggleRead.textContent = book.isRead ? "Mark As Unread" : "Mark As Read";
    card.appendChild(btnToggleRead);

    btnToggleRead.addEventListener("click", () => {
      book.isRead ? (book.isRead = false) : (book.isRead = true);
      btnToggleRead.textContent = book.isRead
        ? "Mark As Unread"
        : "Mark As Read";
      isReadElement.textContent = `Status: ${
        book.isRead ? "Read" : "Not Read"
      }`;
    });

    const btnDeleteBook = document.createElement("button");
    btnDeleteBook.classList.add("delete-book");
    btnDeleteBook.textContent = "Delete";
    card.appendChild(btnDeleteBook);

    btnDeleteBook.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBookLibrary();
    });

    libraryContainer.appendChild(card);
  });
}
