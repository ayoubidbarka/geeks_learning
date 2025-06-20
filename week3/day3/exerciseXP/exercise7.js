let allBooks = [
  {
    title : "Start up",
    author : "Ben Ketai",
    image : "https://m.media-amazon.com/images/M/MV5BMTAxNTIwNzE5MTJeQTJeQWpwZ15BbWU4MDE2NDQ2MTMy._V1_FMjpg_UX1000_.jpg",
    alreadyRead : true
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    alreadyRead: false
  }
];
const section = document.querySelector('.listBooks')
allBooks.forEach(book => {
  const bookDiv = document.createElement('div');

  const bookInfo = document.createElement('p');
  bookInfo.textContent = `${book.title} written by ${book.author}`;

  const bookImage = document.createElement('img');
  bookImage.src = book.image;
  bookImage.style.width = '100px';
  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImage);

  if (book.alreadyRead) {
    bookInfo.style.color = 'red';
  } 
  section.appendChild(bookDiv);
});