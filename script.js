import { renderBookInfo } from "./dom-module.js";

const searchBar = document.getElementById('searchBar');

const searchBtn = document.getElementById('searchButton');

const userInput = document.getElementById('userInput');


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.style.height = 'auto';
})

const searchBook = async (input) => {
    const searchWord = input.split(' ').join('+');
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}`);
    const dataObj = await response.json();

    console.log(dataObj.items);

    const bookInfo = dataObj.items.map((book) => {
        const {title, authors, description, imageLinks, ...rest} = book.volumeInfo;
        return {title, authors, description, imageLinks};
    });

    console.log(bookInfo); //is an array of objects with filtered keys...
    
    //render img to top
    //render title to h2
    //join authors and seperate by &, then render to h4
    //render description to p
   

    bookInfo.forEach((book) => {
        renderBookInfo(book);
        
    })

}

searchBook('Captain Underpants');