import BookModel from '../models/BookModel.ts';
import { CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.tsx';
import { Button } from './ui/button.tsx';
import { Link } from 'react-router-dom';

interface BookListProps {
  books: BookModel[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <section>
      {books.map((book) => (
        <article
          key={book.id}
          className={'flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-3 p-6'}
        >
          <CardHeader className={'flex flex-col items-start justify-start space-x-10'}>
            <CardTitle>
              <img src={book.img} alt={`${book.title} cover`} />
            </CardTitle>
            <CardDescription className={'flex flex-col justify-start　items-start'}>
              <span>{book.author}</span>
              <span>{book.title}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className={'max-w-2xl flex flex-col items-center space-y-4'}>
            <p>{book.description}</p>
            {/*TODO fix this part.*/}
            <Button variant={'link'} size={'lg'}>
              <Link to={`/checkout/${book.id}`}>view details</Link>
            </Button>
          </CardContent>
        </article>
      ))}
    </section>
  );
};

export default BookList;
