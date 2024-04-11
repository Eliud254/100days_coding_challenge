// JavaScript type of scopes 

function Library() {
  let users = {};

  function addUser(name) {
      if (!users[name]) {
          users[name] = {
              borrowedBooks: 0
          };
      }
  }

  function borrowBook(name) {
      if (users[name]) {
          users[name].borrowedBooks++;
      }
  }

  function displayBorrowedBooks() {
      console.log('Borrowed Books:');
      for (let user in users) {
          console.log(`- ${user}: ${users[user].borrowedBooks}`);
      }
  }

  return {
      addUser,
      borrowBook,
      displayBorrowedBooks
  };
}

const myLibrary = Library();

myLibrary.addUser('Alice');
myLibrary.addUser('Bob');
myLibrary.addUser('Alice');

myLibrary.borrowBook('Alice');
myLibrary.borrowBook('Bob');
myLibrary.borrowBook('Alice');

myLibrary.displayBorrowedBooks();
