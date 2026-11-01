import type { IReader } from '../../types/reader.types';
import ReaderCard from './ReaderCard';

interface ReaderListProps {
  readers: IReader[];
}

const ReaderList = ({ readers }: ReaderListProps) => {
  if (readers.length === 0) {
    return <p>Читатели не найдены</p>;
  }
  return (
    <div>
      {readers.map((reader) => (
        <ReaderCard key={reader.id} reader={reader} />
      ))}
    </div>
  );
};

export default ReaderList;