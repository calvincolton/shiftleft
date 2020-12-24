import React, { Component } from 'react';
import axios from 'axios';
import './book-search.css';
import { debounce } from '../../../helpers';
import BookCard from '../BookCard';

class BookSearch extends Component {
  state = {
    searchText: '',
    fetchingBooks: false,
    booklist: [],
    error: null
  };
  
  searchBook = async () => {
    const convertedTitle = this.state.searchText.replace(/[\W_]+/g, "+").toLowerCase();
    const openLibraryUrl = `http://openlibrary.org/search.json`
    this.setState({ fetchingBooks: true })
    try {
      const res = await axios.get(`${openLibraryUrl}?q=${convertedTitle}`)
      this.setState({ booklist: res.data.docs, fetchingBooks: false, error: null })
    } catch (error) {
      this.setState({ error, fetchingBooks: false });
    }
  }

  handleOnChange = (e) => {
    this.setState(
      { searchText: e.target.value },
      debounce(this.searchBook, 1000)
    );
  }

  renderBooklist = () => {
    const { fetchingBooks, booklist } = this.state;
    // cover image, book title, and author information.
    if (fetchingBooks) return <div>Loading...</div>;
    if (booklist.length) {
      console.log(booklist);
      return booklist.map((book, i) => <BookCard key={i} book={book} />);
    }
    return (
      <div>No books found. Type above to search</div>
    );
  }

  render() {
    const { searchText, error } = this.state;
    return (
      <div className="book-search">
        <h5>Search for books here!</h5>
        <input
          value={searchText}
          onChange={this.handleOnChange}
        />
        {error && <div>Whoops! Something went wrong. Try refreshing.</div>}
        <div className="book-list">
          {this.renderBooklist()}
        </div>
      </div>
    );
  }
}

export default BookSearch;