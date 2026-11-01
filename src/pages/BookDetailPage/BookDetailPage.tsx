import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state: RootState) => state.books.items);
  
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div>
        <h2>Книга не найдена</h2>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>← Назад</button>
      <h1>{book.title}</h1>
      <h3>Автор: {book.author}</h3>
      <p>Год: {book.year}</p>
      <p>Жанр: {book.genre}</p>
      <p>Описание: {book.description || 'Нет описания'}</p>
      <p>Статус: {book.isAvailable ? 'Доступна' : 'Выдана'}</p>
    </div>
  );
};

export default BookDetailPage;