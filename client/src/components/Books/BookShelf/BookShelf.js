import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../BookCard';
import { fetchBooks } from '../../../features/books';

class BookShelf extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  // console.log(this.props.books)

  render() {
    const { bookList } = this.props?.books;
    if (!bookList) return <div>Loading...</div>
    return (
      <div className="book-shelf">
        <h3>Book Shelf</h3>
        <div className="book-list">
          {bookList.map(book => <BookCard key={book.id} book={book} bookshelf />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
}

export default connect(mapStateToProps, { fetchBooks })(BookShelf);