import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import BooksPage from './pages/BooksPage/BooksPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import ReaderProfilePage from './pages/ReaderProfilePage/ReaderProfilePage';
import BookDetailPage from './pages/BookDetailPage/BookDetailPage';
import BookEditPage from './pages/BookEditPage/BookEditPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BooksPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="books/:id" element={<BookDetailPage />} />
        <Route path="books/:id/edit" element={<BookEditPage />} />
        <Route path="readers" element={<ReadersPage />} />
        <Route path="reader/:id" element={<ReaderProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;