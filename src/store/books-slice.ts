import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { mockBooks } from '../mocks/books';
import type { IBook } from '../types/book.types';

interface BooksState {
  items: IBook[];
}

const initialState: BooksState = {
  items: mockBooks,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export const selectAllBooks = (state: { books: BooksState }) => state.books.items;
export const selectAvailableBooks = (state: { books: BooksState }) => 
  state.books.items.filter(book => book.isAvailable);

export default booksSlice.reducer;