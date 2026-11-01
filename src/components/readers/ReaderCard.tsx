import { useNavigate } from 'react-router-dom';
import type { IReader } from '../../types/reader.types';

interface ReaderCardProps {
  reader: IReader;
}

const ReaderCard = ({ reader }: ReaderCardProps) => {
  const navigate = useNavigate();

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
      <h3>{reader.fullName}</h3>
      <p><strong>Email:</strong> {reader.email}</p>
      <p><strong>Телефон:</strong> {reader.phone}</p>
      <p><strong>Дата регистрации:</strong> {reader.registrationDate.toLocaleDateString()}</p>
      <button 
        onClick={() => navigate(`/reader/${reader.id}`)}
        style={{ marginTop: '10px', padding: '5px 10px' }}
      >
        Профиль
      </button>
    </div>
  );
};

export default ReaderCard;