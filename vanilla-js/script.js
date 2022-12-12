import { renderBookInfo, bookGrid } from "./dom-module.js";


const missingImg = 'missing.jpeg';

const searchBar = document.getElementById('searchBar');

const searchBtn = document.getElementById('searchButton');

const userInput = document.getElementById('userInput');

const lastResult = document.getElementById("lastResult");

const searchBook = async (input) => {
    try {
        const searchWord = input.split(" ").join("+");
  
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=40`
  );
  
  const dataObj = await response.json();
    
  const bookInfo = await dataObj.items.map((book, index) => {
    return {
        id: index,
      title: book?.volumeInfo?.title || "Title not available",
      authors:
        book?.volumeInfo?.authors?.join(" & ") || "Authors not available",
      description: book?.volumeInfo?.description || "Description not available",
      image: book?.volumeInfo?.imageLinks?.thumbnail || missingImg,
      language: book?.volumeInfo?.language.toUpperCase() || "Information missing",
      published: book?.volumeInfo?.publishedDate || 'Information missing', 
    };
  });
  
  bookInfo.forEach((book) => {
    renderBookInfo(book);
    lastResult.innerText = "No more results.";
   
  });
    } catch(error) {
        lastResult.innerText = 'Could not find what you were looking for. Try another keyword.'
        lastResult.style.height = '100vh';

    }
  


  
    lastResult.style.display = 'block';
};

//

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    lastResult.innerText = '';
    searchBar.classList.add('top');
    bookGrid.innerHTML = '';
    const searchInput = userInput.value;
    searchBook(searchInput);
    userInput.value = "";
    

})