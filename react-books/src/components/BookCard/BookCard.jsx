import React from "react";
import styles from "./BookCard.module.scss";
import { useContext, useState } from "react";
import { BookDetailContext } from "../../context/BookDetailContext/BookDetailContext";

const BookCard = ({ book }) => {
  const { setBookDetails, handleModal } = useContext(BookDetailContext);

  return (
    <div
      className={styles.BookCard}
      onClick={() => {
        setBookDetails(book);
        handleModal();
      }}
    >
      <img src={book.image} />
      <h2>{book.title}</h2>
      <h4>{book.authors}</h4>
      <p>{book.description}</p>
    </div>
  );
};

export default BookCard;
