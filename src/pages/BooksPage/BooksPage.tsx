import Layout from '../../components/common/Layout';
import BookList from '../../components/books/BookList';
import { mockBooks } from '../../mocks/books';

const BooksPage = () => {
  return (
    <Layout>
      <h1>Каталог книг</h1>
      <BookList books={mockBooks} />
    </Layout>
  );
};

export default BooksPage;