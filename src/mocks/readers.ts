import type { IReader } from '../types/reader.types';

export const mockReaders: IReader[] = [
  {
    id: 'r1',
    fullName: 'Иван Петров',
    email: 'ivan@example.com',
    phone: '+7 999 123-45-67',
    registrationDate: new Date('2023-01-15'),
    booksHistory: [
      { bookId: '1', takenAt: new Date('2023-02-01'), returnedAt: new Date('2023-02-15') }
    ],
    activeBooks: ['2']
  },
  {
    id: 'r2',
    fullName: 'Анна Смирнова',
    email: 'anna@example.com',
    phone: '+7 999 765-43-21',
    registrationDate: new Date('2022-11-20'),
    booksHistory: [],
    activeBooks: ['3']
  }
];