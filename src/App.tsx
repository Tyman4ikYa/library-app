import ReaderList from '../../components/readers/ReaderList';
import { mockReaders } from '../../mocks/readers';

const ReadersPage = () => {
  const readers = mockReaders; 
  
  return (
    <div>
      <h1>Читатели библиотеки</h1>
      <ReaderList readers={readers} />
    </div>
  );
};

export default ReadersPage;