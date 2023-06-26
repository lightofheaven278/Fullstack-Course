let arrBook = [];

class Book {
  constructor() {
    this.bookId = "";
    this.bookName = "";
    this.bookPrice = "";
  }
  inputData() {
    this.bookId = document.getElementById("bookId").value;
    this.bookName = document.getElementById("bookName").value;
    this.bookPrice = document.getElementById("price").value;
    document.getElementById("bookId").value = "";
    document.getElementById("bookName").value = "";
    document.getElementById("price").value = "";
    // arrBook.push([this.bookId, this.bookName, this.bookPrice]);
  }
  displayBook() {
    console.log("Book info: " , this.bookId , this.bookName , this.bookPrice);
  }
}

let buttonSave = document.getElementById("save");
buttonSave.addEventListener("click", function (event) {
  let book = new Book();
  book.inputData();
  arrBook.push(book);
  book.displayBook();
  // displayBookInput();
  event.preventDefault();
  console.log(arrBook);
});

// function displayBookInput() {
//   for (const book of arrBook) {
//     book.displayBook();
//   }
// }

function deleteBookFromArr() {
  let arrIndex = Number(prompt("Please input the arr index to delete"));
  arrBook.splice(arrIndex, 1);
  console.log(arrBook);
}
