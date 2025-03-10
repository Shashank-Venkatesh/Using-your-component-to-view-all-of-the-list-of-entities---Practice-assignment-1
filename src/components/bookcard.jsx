import React from "react";
import App from "../App"

const BookCard = ({ book }) => {
  return (
    <div>
      <img src={book.image} alt={book.name} />
      <h2>{book.name}</h2>
      <p >Genre: {book.genre}</p>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookCard;
