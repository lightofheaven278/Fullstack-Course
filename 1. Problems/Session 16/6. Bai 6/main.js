let displayBookId = document.getElementById("bookId");
let displayBookName = document.getElementById("bookName");
let displayBookPrice = document.getElementById("price");
let displayBookAuthor = document.getElementById("author");
let displayBookStatus = document.getElementById("book-status");

class Book {
  constructor() {
    this.bookId = "";
    this.bookName = "";
    this.price = "";
    this.author = "";
    this.bookStatus = "";
  }
  inputData() {
    this.bookId = prompt("Please input book ID");
    this.bookName = prompt("Please input book name");
    this.price = prompt("Please input book price");
    this.author = prompt("Please input book author");
    this.bookStatus = prompt("Please input book status");
  }

  displayData() {
    displayBookId.innerHTML = this.bookId;
    displayBookId.style.color = "red";
    displayBookName.innerHTML = this.bookName;
    displayBookName.style.color = "red";
    displayBookPrice.innerHTML = this.price;
    displayBookPrice.style.color = "red";
    displayBookAuthor.innerHTML = this.author;
    displayBookAuthor.style.color = "red";
    displayBookStatus.innerHTML = this.bookStatus;
    displayBookStatus.style.color = "red";
  }
}

let book1 = new Book();
book1.inputData();
book1.displayData();
