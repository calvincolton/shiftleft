import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './book-search.css';
import BookCard from '../BookCard';

const BookSearch = () => {
  const [searchText, setSearchText] = useState('For Whom the Bell Tolls');
  const [fetching, setFetching] = useState(false);
  const [booklist, setBooklist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchBooks = async () => {
      const convertedTitle = searchText.replace(/[\W_]+/g, "+").toLowerCase();
      const openLibraryUrl = `http://openlibrary.org/search.json`
      try {
        setFetching(true);
        const res = await axios.get(`${openLibraryUrl}?q=${convertedTitle}&limit=12`)
        setBooklist(res.data.docs);
        setFetching(false);
        setError(null);
      } catch (error) {
        setError(error)
        setFetching(false);
      }
    }

    const handler = setTimeout(() =>  {
      searchBooks();
    }, 400)

    return () => clearTimeout(handler)
  }, [searchText]);

  const renderBooklist = () => {
    // cover image, book title, and author information.
    if (fetching) return <div>Loading...</div>;
    if (booklist.length) {
      const bookCards = booklist.map((book, i) => <BookCard key={i} book={book} />);
      return (
        <div className="book-list">
          {bookCards}
        </div>
      );
    }
    return (
      <div>No books found. Type above to search</div>
    );
  }

  return (
    <div className="book-search">
      <h5>Search for books here!</h5>
      <input
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      {error && <div>Whoops! Something went wrong. Try refreshing.</div>}
      {renderBooklist()}
    </div>
  );
}

export default BookSearch;