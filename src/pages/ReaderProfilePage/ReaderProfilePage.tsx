import { useParams, useNavigate } from 'react-router-dom';
import ReaderProfile from '../../components/readers/ReaderProfile';
import { mockReaders } from '../../mocks/readers';

const ReaderProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const reader = mockReaders.find(r => r.id === id);

  if (!reader) {
    return (
      <div>
        <h2>Читатель не найден</h2>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>← Назад</button>
      <ReaderProfile reader={reader} />
    </div>
  );
};

export default ReaderProfilePage;