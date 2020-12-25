import React from 'react';
import './books.css';
import BookSearch from './BookSearch';
import BookShelf from './BookShelf';

const Books = () => {
  return (
    <div className="books">
      <BookShelf />
      <BookSearch />
    </div>
  );
}

export default Books;