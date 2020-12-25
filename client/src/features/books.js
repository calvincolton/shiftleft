import axios from 'axios';
import { serverUrl } from './index'

const FETCH_ALL_BOOKS = 'FETCH_ALL_BOOKS';
const CLEAR_ALL_BOOKS = 'CLEAR_ALL_BOOKS';
const BOOKS_ERROR = 'BOOKS_ERROR';
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const SELECT_BOOK = 'SELECT_BOOK';

const initialState = {
  bookList: null,
  currentBook: null
}

export const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ALL_BOOKS:
    case CLEAR_ALL_BOOKS:
      return { ...state, bookList: action.payload }
    case ADD_BOOK: {
      return { ...state, bookList: [ ...state.bookList, action.payload ]}
    }
    case DELETE_BOOK: {
      const filteredBooks = state.bookList.filter(book => book.id !== action.payload)
      return { ...state, bookList: filteredBooks }
    }
    case SELECT_BOOK: 
      return { ...state, currentBook: action.payload }
    case BOOKS_ERROR:
      const error = new Error(action.err);
      return { ...state, error: error.message };
    default:
      return state;
  }
}

export const fetchBooks = () => async dispatch => {
  try {
    const res = await axios.get(`${serverUrl}/books`);
    dispatch({ type: FETCH_ALL_BOOKS, payload: res.data });
  } catch (err) {
    dispatch({ type: BOOKS_ERROR, err });
  }
}

export const clearBooks = () => dispatch => {
  dispatch({ type: CLEAR_ALL_BOOKS, payload: null  });
}

export const addBook = (props, callback = () => {}) => async dispatch => {
  try {
    const res = await axios.post(`${serverUrl}/books`, props);
    dispatch({ type: ADD_BOOK, payload: res.data });
    callback();
  } catch (err) {
    dispatch({ type: BOOKS_ERROR, err });
  }
};

export const removeBook = (_bookId, callback = () => {}) => async dispatch => {
  try {
    await axios.delete(`${serverUrl}/books/${_bookId}`);
    dispatch({ type: DELETE_BOOK, payload: _bookId });
    callback();
  } catch (err) {
    dispatch({ type: BOOKS_ERROR, err });
  }
};

// export const selectBook = (_bookId) => {
//   dispatch({ type: SELECT_BOOK, payload: _bookId });
// }
