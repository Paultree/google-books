import search from '../../search.png'
import styles from './SearchBar.module.scss'
import { useState, useContext} from 'react'
import { InputValueContext } from '../../contexts/InputValuesContext/InputValuesContext'


const SearchBar = () => {
  const { inputValue, btnClicked, handleChange, handleSearch } = useContext(InputValueContext)
    const searchClass = btnClicked ? [styles.SearchBar, styles.Top] : [styles.SearchBar];
  return (
      <div className={searchClass.join(" ")}>
        <h1>Google Books Clone</h1>
        <div>
          <input
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="Please enter a book title or author here..."
          />
          <button onClick={handleSearch}>
            <img src={search} />
          </button>
        </div>

        <p>Search the world's most comprehensive index of full-text books.</p>
        <a href="#">My library</a>
      </div>
      
    
  );
}

export default SearchBar