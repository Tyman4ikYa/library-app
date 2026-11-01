import Layout from '../../components/common/Layout';
import ReaderProfile from '../../components/readers/ReaderProfile';
import { mockReaders } from '../../mocks/readers';

const ReaderProfilePage = () => {
  // Для демонстрации берем первого читателя из моков
  const reader = mockReaders[0];
  
  return (
    <Layout>
      <ReaderProfile reader={reader} />
    </Layout>
  );
};

export default ReaderProfilePage;