import BookCard from './BookCard';

const BookList = () => {
  const dummyBooks = Array.from({ length: 50 }, (_, index) => ({
    bookCoverUrl: `https://dummyimage.com/160x220/${Math.floor(
      Math.random() * 16777215
    ).toString(16)}/fff&text=Book+${index + 1}`,
    title: `Book Title ${index + 1}`,
    author: `Author ${index + 1}`,
    description: `This is the description for Book Title ${index + 1}.`,
    price: '1111111',
    discount: '10',
  }));
  return (
    <div
      className="grid grid-cols-1 sm
:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      {dummyBooks.map((book, index) => (
        <BookCard
          index={index}
          key={index}
          bookCoverUrl={book.bookCoverUrl}
          title={book.title}
          author={book.author}
          description={book.description}
          price={book.price}
          discount={book.discount}
        />
      ))}
    </div>
  );
};
export default BookList;
