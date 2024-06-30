import { useEffect, useState } from 'react';
import BookModel from '../models/BookModel.ts';
import ReturnBook from './ReturnBook.tsx';

const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = 'http://localhost:8080/api/books';
      const url: string = `${baseUrl}?page=0&size=9`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const responseJson = await response.json();
        const responseData = responseJson._embedded.books;
        const loadedBooks: BookModel[] = responseData.map((book: any) => ({
          id: book.id,
          title: book.title,
          author: book.author,
          description: book.description,
          copies: book.copies,
          copiesAvailable: book.copiesAvailable,
          category: book.category,
          img: book.img,
        }));
        setBooks(loadedBooks);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchBooks();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (httpError) {
    return <div className='text-4xl'>{httpError}</div>;
  }

  return (
    <div className='py-12 px-4 w-full flex flex-col'>
      <h3 className='text-center font-bold text-5xl pb-10'>Find your next "I stayed up too late reading" book.</h3>
      {books.slice(0, 3).map((book) => (
        <ReturnBook book={book} key={book.id} />
      ))}
    </div>
  );
};

export default Carousel;
