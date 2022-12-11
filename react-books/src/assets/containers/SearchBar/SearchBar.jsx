import search from '../../search.png'
import styles from './SearchBar.module.scss'
import { useState } from 'react'
import CardGrid from '../CardGrid/CardGrid'

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    const [btnClicked, setBtnClicked] = useState(false);

    console.log(inputValue);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        
    }

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('old value', inputValue);
        setBtnClicked(true);
        
    }

    const searchClass = btnClicked ? [styles.SearchBar, styles.Top] : [styles.SearchBar];
  return (
    <div>
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
      {btnClicked ? <CardGrid /> : ""}
    </div>
  );
}

export default SearchBar