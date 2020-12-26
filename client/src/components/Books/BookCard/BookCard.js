import React from 'react';
import { connect } from 'react-redux';
import './book-card.css';
import Image from '../../Image';
import { addBook, removeBook } from '../../../features/books';

const BookCard = (props) => {
  const { books, book, bookshelf, addBook, removeBook } = props;
  const { title, author_name, ibsn, cover_i, id  } = book;
  const imgSrc = cover_i 
    ? `http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : `http://covers.openlibrary.org/b/isbn/${ibsn}-M.jpg`
  const fallbackImgSrc = 'https://openlibrary.org/images/icons/avatar_book-sm.png'

  const inBookshelf = books.bookList.findIndex(currentBook => currentBook.ibsn === ibsn) >= 0;

  const checkAndAdd = () => {
    if (inBookshelf) return;
    addBook(book);
  }

  const stringifyAuthors = () => {
    if (!author_name) return null;
    return author_name.join(', ');
  }

  return (
    <div className="book-card">
      <div className="image">
        <Image src={imgSrc} fallbackSrc={fallbackImgSrc} alt="Book Cover" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <h5>{stringifyAuthors()}</h5>
        {bookshelf
          ? <button className="ui danger button" onClick={() => removeBook(id)}>Remove</button>
          : <button className="ui primary button" onClick={checkAndAdd} disabled={inBookshelf}>Add</button>}
      </div>
    </div>
  );
}

const mapStateToProps = ({ books }) => {
  return { books };
}

export default connect(mapStateToProps, { addBook, removeBook })(BookCard);