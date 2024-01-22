import { RecoilValueReadOnly, selector } from 'recoil';
import { bookListState, dummyBooksState, searchQueryState } from './atoms';
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

// 책 목록 전체
export const allBooksSelector: RecoilValueReadOnly<Book[]> = selector({
  key: 'allBooksSelector',
  get: ({ get }) => {
    const books: Book[] = get(dummyBooksState);
    return books;
  },
});
// 할인이 있는 책 목록
export const discountedBooksSelector = selector<Book[]>({
  key: 'discountedBooksSelector',
  get: ({ get }) => {
    const books: Book[] = get(dummyBooksState);
    return books.filter((book) => book.discount !== '');
  },
});
// 책 한 권의 정보
export const bookDetailsSelector: RecoilValueReadOnly<
  (bookId: number) => Book | undefined
> = selector({
  key: 'bookDetailsSelector',
  get:
    ({ get }) =>
    (bookId: number) => {
      const books: Book[] = get(dummyBooksState);
      const selectedBook: Book | undefined = books.find(
        (book) => book.id === bookId
      );
      return selectedBook;
    },
});
// 저자 검색
export const booksByAuthorSelector: RecoilValueReadOnly<
  (author: string) => Book[]
> = selector({
  key: 'booksByAuthorSelector',
  get:
    ({ get }) =>
    (author: string) => {
      const books: Book[] = get(dummyBooksState);
      const authorBooks: Book[] = books.filter(
        (book) => book.author === author
      );
      return authorBooks;
    },
});
// 가격대 검색
export const booksByPriceRangeSelector: RecoilValueReadOnly<
  ({ minPrice, maxPrice }: { minPrice: number; maxPrice: number }) => Book[]
> = selector({
  key: 'booksByPriceRangeSelector',
  get:
    ({ get }) =>
    ({ minPrice, maxPrice }) => {
      const books: Book[] = get(dummyBooksState);
      const filteredBooks: Book[] = books.filter(
        (book) => book.price >= minPrice && book.price <= maxPrice
      );
      return filteredBooks;
    },
});
// 제목 검색
export const booksBySearchKeywordSelector: RecoilValueReadOnly<
  (keyword: string) => Book[]
> = selector({
  key: 'booksBySearchKeywordSelector',
  get:
    ({ get }) =>
    (keyword: string) => {
      const books: Book[] = get(dummyBooksState);
      const filteredBooks: Book[] = books.filter((book) =>
        book.title.toLowerCase().includes(keyword.toLowerCase())
      );
      return filteredBooks;
    },
});
