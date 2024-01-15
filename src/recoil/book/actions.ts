import { searchQueryState, bookListState } from './atoms';
import { Book } from './types';

export const addBook = (book: Book): void => {
  bookListState((prevBooks) => [...prevBooks, book]);
};

export const deleteBook = (bookId: string): void => {
  bookListState((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
};

export const updateBook = (bookId: string, updatedBook: Book): void => {
  bookListState((prevBooks) =>
    prevBooks.map((book) => (book.id === bookId ? updatedBook : book))
  );
};

export const updateSearchQuery = (query: string): void => {
  searchQueryState(query);
};
