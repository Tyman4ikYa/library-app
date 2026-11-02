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
    // НОВЫЙ РЕДЬЮСЕР: обновление книги
    updateBook: (state, action: PayloadAction<IBook>) => {
      const index = state.items.findIndex((b) => b.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addBook, updateBook } = booksSlice.actions;

// Селекторы
export const selectAllBooks = (state: { books: BooksState }) => state.books.items;
export const selectAvailableBooks = (state: { books: BooksState }) => 
  state.books.items.filter(book => book.isAvailable);

// НОВЫЙ СЕЛЕКТОР: получение одной книги по ID
export const selectBookById = (state: { books: BooksState }, id: string) => 
  state.books.items.find((book) => book.id === id);

export default booksSlice.reducer;