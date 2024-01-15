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
