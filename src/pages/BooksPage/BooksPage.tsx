import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from '../../components/books/BookList';
import { selectAllBooks, addBook } from '../../store/books-slice';
import type { RootState } from '../../store/store';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => selectAllBooks(state));

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author) return;

    dispatch(addBook({
      id: Date.now().toString(),
      title,
      author,
      year: 2024,
      genre: 'Неизвестно',
      isAvailable: true
    }));

    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h1>Каталог книг</h1>
      <form onSubmit={handleAddBook} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>Добавить книгу</h3>
        <input type="text" placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginRight: '10px' }} />
        <input type="text" placeholder="Автор" value={author} onChange={(e) => setAuthor(e.target.value)} style={{ marginRight: '10px' }} />
        <button type="submit">Добавить</button>
      </form>
      <BookList books={books} />
    </div>
  );
};

export default BooksPage;