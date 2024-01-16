import BookCard from './BookCard';
import { BooksState } from '../../recoil/book/types';

interface BookListProps {
  books: BooksState;
}

const BookList = ({ books }: BookListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
      {books.map((book, index) => (
        <li key={book.id}>
          <BookCard
            id={book.id}
            index={index}
            bookCoverUrl={book.bookCoverUrl}
            title={book.title}
            author={book.author}
            description={book.description}
            price={book.price}
            discount={book.discount}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
