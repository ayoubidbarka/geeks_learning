// Step 1: Create an array of book objects
const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg",
    alreadyRead: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    alreadyRead: false
  }
];

// Step 2: Select the <section>
const section = document.querySelector(".listBooks");

// Step 3: Loop through the books and display each one
allBooks.forEach(book => {
  // Create a div for each book
  const bookDiv = document.createElement("div");

  // Set content: title + author
  const bookDetails = document.createElement("p");
  bookDetails.textContent = `${book.title} written by ${book.author}`;

  // If already read, make it red
  if (book.alreadyRead) {
    bookDetails.style.color = "red";
  }

  // Create and style the image
  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  // Append elements
  bookDiv.appendChild(bookDetails);
  bookDiv.appendChild(bookImg);
  section.appendChild(bookDiv);
});
