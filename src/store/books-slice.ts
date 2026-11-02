import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IBook } from '../types/book.types';

interface BooksState {
  items: IBook[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BooksState = {
  items: [],
  status: 'idle',
  error: null,
};

const API_URL = 'http://localhost:3001/books';

export const fetchBooks = createAsyncThunk('books/fetchAll', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addBookAsync = createAsyncThunk('books/add', async (newBook: Omit<IBook, 'id'>) => {
  const response = await axios.post(API_URL, { ...newBook, id: Date.now().toString() });
  return response.data;
});

export const updateBookAsync = createAsyncThunk('books/update', async (book: IBook) => {
  const response = await axios.put(`${API_URL}/${book.id}`, book);
  return response.data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Ошибка загрузки';
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateBookAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex((b) => b.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const selectAllBooks = (state: { books: BooksState }) => state.books.items;
export const selectBooksStatus = (state: { books: BooksState }) => state.books.status;
export const selectBooksError = (state: { books: BooksState }) => state.books.error;
export const selectBookById = (state: { books: BooksState }, id: string) => 
  state.books.items.find((book) => book.id === id);

export default booksSlice.reducer;