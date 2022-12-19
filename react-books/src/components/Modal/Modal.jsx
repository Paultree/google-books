import React from "react";
import { useContext, useState } from "react";
import { BookDetailContext } from "../../context/BookDetailContext/BookDetailContext";
import styles from "./Modal.module.scss";

const Modal = () => {
  const { isModalOpen, bookDetails, closeModal } =
    useContext(BookDetailContext);

  if (!isModalOpen) return null;

  return (
    <div className={styles.ModalBox} onClick={closeModal}>
      <div
        className={styles.Modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={bookDetails.image} />
        <h2>Title: {bookDetails.title}</h2>
        <h4>Authors: {bookDetails.authors}</h4>
        <p>
          <b>Description: </b>
          {bookDetails.description}
        </p>
        <p>
          <b>Language: </b>
          {bookDetails.language}
        </p>
        <p>
          <b>Year Published: </b>
          {bookDetails.published}
        </p>
      </div>
    </div>
  );
};

export default Modal;
