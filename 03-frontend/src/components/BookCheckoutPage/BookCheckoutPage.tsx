import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel.ts';
import StarsReview from '../Utils/StarsReview.tsx';
import CheckoutAndReview from './CheckoutAndReview.tsx';

const BookCheckoutPage = () => {
  const [book, setBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // /checkout/1
  const bookId = window.location.pathname.split('/')[2];

  useEffect(() => {
    const fetchBook = async () => {
      const baseUrl = `http://localhost:8080/api/books/${bookId}`;

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const responseJson = await response.json();

      const loadedBook: BookModel = {
        id: responseJson.id,
        title: responseJson.title,
        author: responseJson.author,
        description: responseJson.description,
        copies: responseJson.copies,
        copiesAvailable: responseJson.copiesAvailable,
        category: responseJson.category,
        img: responseJson.img,
      };

      setBook(loadedBook);
      setIsLoading(false);
    };

    fetchBook().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (httpError) {
    return <div className='text-4xl'>{httpError}</div>;
  }

  return (
    <section className={'px-10 py-10 flex flex-col lg:flex-row justify-center items-center space-x-10 space-y-10'}>
      <div className={'basis-2/12'}>
        <img src={book?.img} alt='' width={300} />
      </div>
      <div className={'basis-6/12 flex flex-col space-y-4'}>
        <h2 className={'text-4xl font-extrabold'}>{book?.title}</h2>
        <span className={'text-xl font-extralight '}>{book?.author}</span>
        <p className={'text-xl'}>{book?.description}</p>
        <StarsReview rating={4} size={1} />
      </div>
      <div className={'basis-4/12'}>
        <CheckoutAndReview book={book} />
      </div>
    </section>
  );
};

export default BookCheckoutPage;
