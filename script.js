const searchBar = document.getElementById('searchBar');

const searchBtn = document.getElementById('searchButton');



searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.style.height = 'auto';
})