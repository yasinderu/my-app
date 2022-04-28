import { combineReducers } from "redux";
import booksReducer from './books';
import categoriesReducer from './categories';

const reducers = combineReducers({
    books: booksReducer,
    categories: categoriesReducer
})

export default reducers;