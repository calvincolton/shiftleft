import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../../features/books';

class BookShelf extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    console.log(this.props.books)
    return (
      <div className="book-shelf">Book Shelf</div>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
}

export default connect(mapStateToProps, { fetchBooks })(BookShelf);