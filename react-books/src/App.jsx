import { useEffect } from "react";
import { useState } from "react";
import styles from "./App.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import BookGrid from "./containers/BookGrid/BookGrid";
import missingImg from "./assets/missing.jpeg";
import Modal from "./components/Modal/Modal.jsx";
import BookDetailProvider from "./context/BookDetailContext/BookDetailContext";

function App() {
  const [input, setInput] = useState("");
  const [bookList, setBookList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [resultsFound, setResultsFound] = useState(false);

  const fetchData = async (string) => {
    const searchWord = string.toLowerCase().split(" ").join("+");
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=40`
    );
    return await response.json();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    try {
      const data = await fetchData(input);
      const bookInfo = data.items;
      const bookResults = bookInfo.map((book, index) => {
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
      setBookList(bookResults);
      setResultsFound(true);
    } catch (error) {
      console.log(error);
      setBookList(undefined);
      setResultsFound(false);
    }
  };

  return (
    <BookDetailProvider>
      <div className={styles.App}>
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          input={input}
          isClicked={isClicked}
        />
        <BookGrid
          resultsFound={resultsFound}
          bookList={bookList}
          isClicked={isClicked}
        />
        <Modal />
      </div>
    </BookDetailProvider>
  );
}

export default App;
