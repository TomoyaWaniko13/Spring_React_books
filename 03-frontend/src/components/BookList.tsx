import BookModel from '../models/BookModel.ts';
import { CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.tsx';
import { Button } from './ui/button.tsx';

interface BookListProps {
  books: BookModel[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <section>
      {books.map((book) => (
        <article key={book.id} className={'flex flex-row justify-center space-y-3 p-6'}>
          <CardHeader className={'flex flex-col space-x-10'}>
            <CardTitle>
              <img src={book.img} alt={`${book.title} cover`} />
            </CardTitle>
            <CardDescription className={'flex flex-col justify-start'}>
              <span>{book.author}</span>
              <span>{book.title}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className={'max-w-2xl flex flex-col space-y-4'}>
            <p>{book.description}</p>
            <Button>View Details</Button>
          </CardContent>
        </article>
      ))}
    </section>
  );
};

export default BookList;
