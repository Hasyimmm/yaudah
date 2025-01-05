const books = [
  { title: "Pemrograman Web Dasar", author: "John Doe", year: 2020 },
  { title: "JavaScript Modern", author: "Jane Smith", year: 2021 },
  { title: "HTML & CSS Lengkap", author: "Albert Brown", year: 2019 },
];

function displayBooks(bookList) {
  const bookListDiv = document.getElementById("book-list");
  bookListDiv.innerHTML = "";

  if (bookList.length === 0) {
      bookListDiv.innerHTML = "<p>Tidak ada buku yang ditemukan.</p>";
      return;
  }

  bookList.forEach((book, index) => {
      const bookDiv = document.createElement("div");
      bookDiv.className = "book";
      bookDiv.innerHTML = `
          <h3>${book.title}</h3>
          <p>Penulis: ${book.author}</p>
          <p>Tahun: ${book.year}</p>
          <button onclick="deleteBook(${index})">Hapus Buku</button>
      `;
      bookListDiv.appendChild(bookDiv);
  });
}

function searchBook() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
  displayBooks(filteredBooks);
}

function toggleAddBookForm() {
  const addBookSection = document.getElementById("add-book-section");
  addBookSection.classList.toggle("hidden");
}

function addBook(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = parseInt(document.getElementById("year").value);

  books.push({ title, author, year });
  displayBooks(books);
  document.getElementById("add-book-form").reset();
  toggleAddBookForm();
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks(books);
}

document.addEventListener("DOMContentLoaded", () => {
  displayBooks(books);
});