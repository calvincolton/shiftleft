import { combineReducers } from 'redux';
import { booksReducer } from './books';

export const serverUrl = 'http://localhost:3333';

const rootReducer =  combineReducers({
  books: booksReducer
})

export default rootReducer;