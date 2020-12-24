import React from 'react';

const BookCard = ({ book }) => {
  const { title, author_name, } = book;
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <h5>{author_name}</h5>
    </div>
  );
}

export default BookCard;