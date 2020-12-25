import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './book-search.css';
import BookCard from '../BookCard';

const BookSearch = () => {
  const [searchText, setSearchText] = useState('The Old Man By the Sea');
  const [fetching, setFetching] = useState(false);
  const [booklist, setBooklist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchBooks = async () => {
      const convertedTitle = searchText.replace(/[\W_]+/g, "+").toLowerCase();
      const openLibraryUrl = `http://openlibrary.org/search.json?q=${convertedTitle}&jscmd=data&limit=12`
      try {
        setFetching(true);
        const res = await axios.get(openLibraryUrl)
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
    if (fetching) return <div>Loading...</div>;
    if (Array.isArray(booklist)) {
      const bookCards = booklist.map(({ title, author_name, cover_i, isbn }) => {
        let firstIsbn = Array.isArray(isbn) && isbn[0];
        const bookProps = { title, author_name, ibsn: firstIsbn, cover_i };
        return <BookCard key={firstIsbn} book={bookProps} bookshelf={false} />
      });
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
      <div className="ui input">
        <input
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      {error && <div>Whoops! Something went wrong. Try refreshing.</div>}
      {renderBooklist()}
    </div>
  );
}

export default BookSearch;