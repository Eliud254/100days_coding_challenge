let library = [
  { title: "Book 1", author: "Author A", genre: "Fantasy", rating: 4.5 },
  { title: "Book 2", author: "Author B", genre: "Mystery", rating: 4.2 },
  { title: "Book 3", author: "Author A", genre: "Fantasy", rating: 4.8 },
  { title: "Book 4", author: "Author C", genre: "Science Fiction", rating: 4.6 },
  { title: "Book 5", author: "Author B", genre: "Mystery", rating: 3.9 },
  { title: "Book 6", author: "Author A", genre: "Fantasy", rating: 4.7 }
];

function getHighlyRatedBooks(library, minRating) {
  return library.filter(book => book.rating >= minRating).map(book => book.title);
}

function getGenres(library) {
  return [...new Set(library.map(book => book.genre))];
}

function getBooksByGenre(library, genre) {
  return library.filter(book => book.genre === genre).map(book => book.title);
}

function getAuthorWithMostBooks(library) {
  let authorCount = {};
  library.forEach(book => {
      authorCount[book.author] = (authorCount[book.author] || 0) + 1;
  });
  let maxBooks = Math.max(...Object.values(authorCount));
  return Object.keys(authorCount).find(author => authorCount[author] === maxBooks);
}

function getBooksByAuthor(library, author) {
  return library.filter(book => book.author === author).map(book => book.title);
}

console.log("Highly rated books:", getHighlyRatedBooks(library, 4.5));
console.log("Unique genres:", getGenres(library));
console.log("Books in Fantasy genre:", getBooksByGenre(library, "Fantasy"));
console.log("Author with most books:", getAuthorWithMostBooks(library));
console.log("Books by Author A:", getBooksByAuthor(library, "Author A"));
