import React from 'react';
import './books.css';
import BookSearch from './BookSearch';
import BookShelf from './BookShelf';

const Books = () => {
  return (
    <div className="books">
      <BookSearch />
      <BookShelf />
    </div>
  );
}

export default Books;