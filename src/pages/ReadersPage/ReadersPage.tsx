import Layout from '../../components/common/Layout';
import ReaderList from '../../components/readers/ReaderList';
import { mockReaders } from '../../mocks/readers';

const ReadersPage = () => {
  return (
    <Layout>
      <h1>Читатели библиотеки</h1>
      <ReaderList readers={mockReaders} />
    </Layout>
  );
};

export default ReadersPage;