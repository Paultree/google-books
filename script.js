import { renderBookInfo, bookGrid } from "./dom-module.js";

const missingImg = 'missing.jpeg';

const searchBar = document.getElementById('searchBar');

const searchBtn = document.getElementById('searchButton');

const userInput = document.getElementById('userInput');

const searchBook = async (input) => {
  const searchWord = input.split(" ").join("+");
  console.log(searchWord);
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=40`
  );
  console.log(response);
  const dataObj = await response.json();
    console.log(dataObj);
  const bookInfo = await dataObj.items.map((book) => {
    return {
      title: book?.volumeInfo?.title || "Title not available",
      authors: book?.volumeInfo?.authors?.join(" & ") || "Authors not available",
      description: book?.volumeInfo?.description || "Description not available",
      image: book?.volumeInfo?.imageLinks?.thumbnail || missingImg,
    };
  });

    console.log(bookInfo);
  bookInfo.forEach((book) => {
    
    renderBookInfo(book);
  });
};

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.classList.add('top');
    userInput.innerText='';
    bookGrid.innerHTML = '';
    const searchInput = userInput.value;
    searchBook(searchInput);
})

