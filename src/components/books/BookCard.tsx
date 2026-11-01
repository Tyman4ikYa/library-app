import type { IBook } from '../../types/book.types';

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const { title, author, year, genre, isAvailable } = book;
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p><strong>Автор:</strong> {author}</p>
      <p><strong>Год:</strong> {year} | <strong>Жанр:</strong> {genre}</p>
      <p style={{ color: isAvailable ? 'green' : 'red' }}>
        {isAvailable ? 'Доступна' : 'Выдана'}
      </p>
    </div>
  );
};

export default BookCard;