import React from "react";
import styles from "./BookGrid.module.scss";
import BookCard from "../../components/BookCard/BookCard";

const BookGrid = ({ bookList, isClicked, resultsFound }) => {
  const classes = isClicked
    ? [styles.BookGrid]
    : [styles.BookGrid, styles.Hidden];

  const noMoreResults = resultsFound
    ? [styles.End]
    : [styles.End, styles.Hidden];

  return (
    <div className={`${classes.join(" ")}`}>
      {bookList ? (
        bookList.map((book, index) => {
          return <BookCard index={index} book={book} key={index} />;
        })
      ) : (
        <h2>
          Could not find what you were looking for. Please enter another
          keyword.
        </h2>
      )}
      <h2 className={`${noMoreResults.join(" ")}`}>No more results.</h2>
    </div>
  );
};

export default BookGrid;
