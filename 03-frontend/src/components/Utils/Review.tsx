import { FC } from 'react';
import ReviewModel from '../../models/ReviewModel.ts';
import StarsReview from './StarsReview.tsx';

const Review: FC<ReviewModel> = (review) => {
  const newDate = new Date(review.date);

  const longMonth = newDate.toLocaleString('en-US', { month: 'long' });
  const dateDay = newDate.getDate();
  const dateYear = newDate.getFullYear();

  const dateRender = longMonth + ' ' + dateDay + ', ' + dateYear;

  return (
    <section className={'flex flex-row justify-center space-y-2 space-x-10'}>
      <div>
        <h4 className={'font-extralight'}>{review.userEmail}</h4>
        <p className={'font-extralight'}>{dateRender}</p>
        <p className={'text-xl font-semibold'}>{review.reviewDescription}</p>
      </div>
      <div>
        <StarsReview rating={review.rating} size={16} />
      </div>
    </section>
  );
};

export default Review;
