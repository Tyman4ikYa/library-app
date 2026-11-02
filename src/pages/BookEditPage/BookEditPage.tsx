import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectBookById, updateBook } from '../../store/books-slice';
import type { RootState } from '../../store/store';

const BookEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const book = useSelector((state: RootState) => selectBookById(state, id || ''));

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  if (!book) return <div>Книга не найдена</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateBook({ ...book, title, author }));
    navigate(`/books/${book.id}`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Редактирование книги</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Название: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Автор: </label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: '10px' }}>Отмена</button>
      </form>
    </div>
  );
};

export default BookEditPage;