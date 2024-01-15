import { selector } from 'recoil';
import { bookListState, searchQueryState } from './atoms';
import { Book } from './types';

export const filteredBooksSelector = selector<Book[]>({
  key: 'filteredBooksSelector',
  get: ({ get }) => {
    const query = get(searchQueryState);
    const books = get(bookListState);

    return query
      ? books.filter(
          (book) => book.title.includes(query) || book.author.includes(query)
        )
      : books;
  },
});
