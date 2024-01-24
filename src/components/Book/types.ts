import { BooksState } from '../../recoil/book/types';

export interface BookListProps {
  books: BooksState;
}
export interface BookCardProps {
  id: number;
  index: number;
  bookCoverUrl?: string;
  title: string;
  author?: string;
  category?: string[];
  price: number;
  discount?: string;
}
