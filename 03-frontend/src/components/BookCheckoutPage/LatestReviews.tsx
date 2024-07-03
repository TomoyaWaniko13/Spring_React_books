import ReviewModel from '../../models/ReviewModel.ts';
import { FC } from 'react';
import Review from '../Utils/Review.tsx';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button.tsx';

interface LatestReviewsProps {
  reviews: ReviewModel[];
  bookId: number | undefined;
}

const LatestReviews: FC<LatestReviewsProps> = (reviews, bookId) => {
  return (
    <div className={'flex justify-center space-y-3 p-3'}>
      {reviews.reviews.length > 0 ? (
        <div className={'flex flex-row space-x-12'}>
          <h2 className={'text-4xl font-extralight'}>
            Latest <br /> Reviews:
          </h2>
          {reviews.reviews.slice(0, 3).map((eachReview) => (
            <Review
              id={eachReview.id}
              userEmail={eachReview.userEmail}
              date={eachReview.date}
              rating={eachReview.rating}
              book_id={eachReview.book_id}
              reviewDescription={eachReview.reviewDescription}
              key={eachReview.id}
            ></Review>
          ))}
          <div>
            <Button className={'default'} size={'lg'}>
              <Link to={'#'}>reach all reviews.</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className={'p-3'}>
          <p className={'text-3xl font-extralight'}>currently there are no reviews for this book.</p>
        </div>
      )}
    </div>
  );
};

export default LatestReviews;
