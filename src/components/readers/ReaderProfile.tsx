import type { IReader } from '../../types/reader.types';

interface ReaderProfileProps {
  reader: IReader;
}

const ReaderProfile = ({ reader }: ReaderProfileProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '2rem', borderRadius: '8px' }}>
      <h2>Профиль: {reader.fullName}</h2>
      <p><strong>Email:</strong> {reader.email}</p>
      <p><strong>Телефон:</strong> {reader.phone}</p>
      <p><strong>Дата регистрации:</strong> {reader.registrationDate.toLocaleDateString()}</p>
      <p><strong>Активные книги:</strong> {reader.activeBooks.length}</p>
    </div>
  );
};

export default ReaderProfile;