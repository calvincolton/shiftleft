import React from 'react';
import './book-card.css';

const BookCard = (props) => {
  const { title, author_name, isbn, id } = props.book;
  const coverUrl = isbn && isbn.length && `http://covers.openlibrary.org/b/isbn/${isbn[0]}-M.jpg`

  const fallbackImgSrc = 'https://openlibrary.org/images/icons/avatar_book-sm.png'

  return (
    <div className="book-card">
      <div className="image">
        <img src={coverUrl} onError={e => e.target.src = fallbackImgSrc} alt="Book Cover" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <h5>{author_name}</h5>
        <button className="ui primary button" onClick={() => props.addBook(id)}>Add</button>
      </div>
    </div>
  );
}

export default BookCard;