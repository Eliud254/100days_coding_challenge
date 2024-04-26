// Book class representing a book in the library
class Book {
  constructor(title, author, ISBN) {
    this._title = title;
    this._author = author;
    this._ISBN = ISBN;
    this._isAvailable = true; // Default availability status
  }

  // Getter and setter methods for availability status
  get isAvailable() {
    return this._isAvailable;
  }
  set isAvailable(status) {
    this._isAvailable = status;
  }
}

// Patron class representing a library patron
class Patron {
  constructor(name, membershipID) {
    this._name = name;
    this._membershipID = membershipID;
    this._borrowedBooks = []; // List of borrowed books
  }

  // Method to borrow a book
  borrowBook(book) {
    if (book.isAvailable) {
      this._borrowedBooks.push(book);
      book.isAvailable = false; // Update availability status
      console.log(`${this._name} borrowed "${book._title}"`);
    } else {
      console.log(`Sorry, "${book._title}" is not available`);
    }
  }

  // Method to return a book
  returnBook(book) {
    const index = this._borrowedBooks.indexOf(book);
    if (index !== -1) {
      this._borrowedBooks.splice(index, 1);
      book.isAvailable = true; // Update availability status
      console.log(`${this._name} returned "${book._title}"`);
    } else {
      console.log(`${this._name} does not have "${book._title}" to return`);
    }
  }
}

// Library class representing the library and its operations
class Library {
  constructor() {
    this._books = []; // List of books in the library
    this._patrons = []; // List of library patrons
  }

  // Method to add a book to the library
  addBook(book) {
    this._books.push(book);
    console.log(`Added "${book._title}" to the library`);
  }

  // Method to register a patron with the library
  registerPatron(patron) {
    this._patrons.push(patron);
    console.log(`Registered ${patron._name} as a library patron`);
  }

  // Method to display all books in the library
  displayBooks() {
    console.log("Books in the library:");
    this._books.forEach(book => console.log(`- ${book._title} by ${book._author}`));
  }

  // Method to display all patrons of the library
  displayPatrons() {
    console.log("Patrons of the library:");
    this._patrons.forEach(patron => console.log(`- ${patron._name} (Membership ID: ${patron._membershipID})`));
  }
}

// Example usage of the Library Management System
const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084");
const book3 = new Book("1984", "George Orwell", "9780451524935");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const patron1 = new Patron("Alice", "P001");
const patron2 = new Patron("Bob", "P002");

library.registerPatron(patron1);
library.registerPatron(patron2);

patron1.borrowBook(book1);
patron1.borrowBook(book2);
patron1.returnBook(book1);
patron2.borrowBook(book3);

library.displayBooks();
library.displayPatrons();