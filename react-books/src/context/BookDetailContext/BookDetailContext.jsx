import { createContext, useState } from "react";

export const BookDetailContext = createContext();

const BookDetailProvider = ({ children }) => {
  const [bookDetails, setBookDetails] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const data = {
    isModalOpen,
    setIsModalOpen,
    bookDetails,
    setBookDetails,
    handleModal,
    closeModal,
  };

  return (
    <BookDetailContext.Provider value={data}>
      {children}
    </BookDetailContext.Provider>
  );
};

export default BookDetailProvider;
