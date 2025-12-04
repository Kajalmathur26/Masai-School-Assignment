/* Assignment by Kajal */
let books = [];
let isAscending = true;

const bookImage = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

const titleField = document.getElementById("title");
const authorField = document.getElementById("author");
const categoryField = document.getElementById("category");
const bookContainer = document.getElementById("bookGrid");
const categoryFilter = document.getElementById("filterSelect");
const sortButton = document.getElementById("sortBtn");
const addButton = document.getElementById("addBtn");

addButton.addEventListener("click", () => {
    const title = titleField.value.trim();
    const author = authorField.value.trim();
    const category = categoryField.value;

    if (!title || !author || !category) {
        alert("All fields are required.");
        return;
    }

    const newBook = {
        title,
        author,
        category,
        imageUrl: bookImage
    };

    books.push(newBook);

    titleField.value = "";
    authorField.value = "";
    categoryField.value = "";

    displayBooks();
});

function displayBooks() {
    bookContainer.innerHTML = "";

    let displayedBooks = books;

    if (categoryFilter.value !== "All") {
        displayedBooks = books.filter(book => book.category === categoryFilter.value);
    }

    displayedBooks.forEach((book, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${book.imageUrl}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <button class="delete-btn" onclick="removeBook(${index})">Delete</button>
        `;

        bookContainer.appendChild(card);
    });
}

function removeBook(index) {
    books.splice(index, 1);
    displayBooks();
}

sortButton.addEventListener("click", () => {
    books.sort((a, b) => isAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

    sortButton.textContent = isAscending ? "Sort: Z → A" : "Sort: A → Z";
    isAscending = !isAscending;

    displayBooks();
});

categoryFilter.addEventListener("change", displayBooks);
