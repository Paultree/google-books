import { renderBookInfo } from "./dom-module.js";

const missingImg = 'missing.jpeg';

const searchBar = document.getElementById('searchBar');

const searchBtn = document.getElementById('searchButton');

const userInput = document.getElementById('userInput');


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.classList.add('top');
})

const searchBook = async (input) => {
    const searchWord = input.split(' ').join('+');
    console.log(searchWord);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}`);
    const dataObj = await response.json();

    console.log(dataObj.items);

    const bookInfo = await dataObj.items.map((book) => {
        console.log(book.volumeInfo.imageLinks)
        return {
          title: book.volumeInfo.title || "Title not available",
          authors: book.volumeInfo.authors || "Authors not available",
          description:
            book.volumeInfo.description || "Description not available",
          image:
            book.volumeInfo.imageLinks ||
            missingImg,
        };
    });

    
    console.log(bookInfo); //is an array of objects with filtered keys...
    
    // console.log(bookInfo.imageLinks.thumbnail);

    //render img to top
    //render title to h2
    //join authors and seperate by &, then render to h4
    //render description to p
   

    const imgArr = bookInfo.map((book) => {
        renderBookInfo(book);
        
 
    })

    
}

searchBook('the silent patient');