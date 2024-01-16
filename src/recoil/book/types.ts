export interface Book {
  id: number;
  bookCoverUrl: string;
  title: string;
  author: string;
  description: string;
  price: number;
  discount: string;
}

export type BooksState = Book[];
