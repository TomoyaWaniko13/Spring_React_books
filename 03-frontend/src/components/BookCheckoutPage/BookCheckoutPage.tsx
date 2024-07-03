import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel.ts';
import StarsReview from '../Utils/StarsReview.tsx';
import CheckoutAndReview from './CheckoutAndReview.tsx';
import ReviewModel from '../../models/ReviewModel.ts';

const BookCheckoutPage = () => {
  const [book, setBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // Review State
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [isLoadingReview, setIsLoadingReview] = useState(true);

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

  useEffect(() => {
    const fetchBookReviews = async () => {
      const reviewUrl: string = `http//localhost:8080/api/reviews/search/findByBookId=${bookId}`;
      const responseReviews = await fetch(reviewUrl);

      if (!responseReviews.ok) {
        throw new Error('Something went wrong!');
      }

      const responseJsonReviews = await responseReviews.json();
      const responseData = responseJsonReviews._embedded.reviews;

      const loadedReviews: ReviewModel[] = [];
      let weightedStarReviews: number = 0;

      for (const key in responseData) {
        loadedReviews.push({
          id: responseData[key].id,
          userEmail: responseData[key].userEmail,
          date: responseData[key].date,
          rating: responseData[key].rating,
          book_id: responseData[key].book_id,
          reviewDescription: responseData[key].reviewDescription,
        });
        weightedStarReviews = weightedStarReviews + responseData[key].rating;
      }

      if (loadedReviews) {
        const averageReview = weightedStarReviews / loadedReviews.length;
        const round = (Math.round(averageReview * 2) / 2).toFixed(1);
        setTotalStars(Number(round));
      }

      setReviews(loadedReviews);
      setIsLoadingReview(false);
    };

    fetchBookReviews().catch((error: any) => {
      setIsLoadingReview(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading || isLoadingReview) {
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
