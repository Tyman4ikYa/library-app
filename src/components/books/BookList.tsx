import type { IBook } from '../../types/book.types';
import BookCard from './BookCard';

interface BookListProps {
  books: IBook[];
}

const BookList = ({ books }: BookListProps) => {
  if (books.length === 0) {
    return <p>Книги не найдены</p>;
  }
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;