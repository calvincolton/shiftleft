import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-shelf.css';
import BookCard from '../BookCard';
import { fetchBooks } from '../../../features/books';

class BookShelf extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { bookList } = this.props?.books;
    if (!bookList) return <div>Loading...</div>
    return (
      <div className="book-shelf">
        <div className="interior">
          <h3>Book Shelf</h3>
          <div className="book-list">
            {bookList.length
              ? bookList.map(book => <BookCard key={book.id} book={book} bookshelf />)
              : <div>There are currently no books in your bookshelf.</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
}

export default connect(mapStateToProps, { fetchBooks })(BookShelf);