let inputData = document.createElement("input");
document.body.appendChild(inputData);
inputData.setAttribute("placeholder", "Please input book info");
function book(
  bookId,
  bookName,
  price,
  author,
  bookStatus,
  inputData,
  displayData,
) {
    this.bookId = bookId;
    this.bookName = bookName;
    this.price = price;
    this.author = author;
    this.bookStatus = bookStatus;
    this.inputData = inputData;
    this.displayData = displayData;
}
