import { atom } from 'recoil';
import { Book } from './types';

// 책 목록 상태
export const bookListState = atom<Book[]>({
  key: 'bookListState',
  default: [],
});

// 검색어 상태
export const searchQueryState = atom<string>({
  key: 'searchQueryState',
  default: '',
});

export const dummyBooksState = atom<Book[]>({
  key: 'dummyBooksState',
  default: Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    bookCoverUrl: `https://dummyimage.com/160x220/`,
    title: `책 ${index + 1}`,
    author: `저자 ${index + 1}`,
    description: `This is the description for Book Title ${index + 1}.`,
    price: 1111111,
    discount: Math.random() > 0.5 ? '10' : '',
  })),
});
