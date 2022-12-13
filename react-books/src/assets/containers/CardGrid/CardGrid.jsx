import {useContext, useEffect, useState} from 'react'
import styles from './CardGrid.module.scss'
import { InputValueContext } from "../../contexts/InputValuesContext/InputValuesContext";
import Card from '../../components/Card/Card';

const CardGrid = () => {
  const { inputValue, btnClicked, handleChange, handleSearch } = useContext(InputValueContext);
  
  const [bookList, setBookList] = useState([]);

  const inputSearch = inputValue.split(' ').join('+');
  console.log(inputSearch);

  const getBooks = async (input) => {

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    console.log(response);

    const dataObj = await response.json();

    const bookInfo = await dataObj.items.map((book, index) => {
      return {
        id: index,
        title: book?.volumeInfo?.title || "Title not available",
        authors:
          book?.volumeInfo?.authors?.join(" & ") || "Authors not available",
        description:
          book?.volumeInfo?.description || "Description not available",
        image: book?.volumeInfo?.imageLinks?.thumbnail || missingImg,
        language:
          book?.volumeInfo?.language.toUpperCase() || "Information missing",
        published: book?.volumeInfo?.publishedDate || "Information missing",
      };
    });

    setBookList(bookInfo);


  }
  
  useEffect(() => {getBooks(inputSearch)},[btnClicked]);

  return (
    <div className={styles.CardGrid}>
      {bookList.map((book, index) => {
        return (
          <Card key={index} image={book.image}title={book.title} authors={book.authors} description={book.description} />
        )
      })}
    </div>
  )
}

export default CardGrid