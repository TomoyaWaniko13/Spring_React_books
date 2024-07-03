import { FC } from 'react';
import ReviewModel from '../../models/ReviewModel.ts';
import StarsReview from './StarsReview.tsx';

const Review: FC<ReviewModel> = ({ userEmail, date, rating, reviewDescription }) => {
  const newDate = new Date(date);

  const longMonth = newDate.toLocaleString('en-US', { month: 'long' });
  const dateDay = newDate.getDate();
  const dateYear = newDate.getFullYear();

  const dateRender = longMonth + ' ' + dateDay + ', ' + dateYear;

  return (
    <section className={'flex flex-row justify-center space-y-2 space-x-10'}>
      <div>
        <h4 className={'font-extralight'}>{userEmail}</h4>
        <p className={'font-extralight'}>{dateRender}</p>
        <p className={'text-xl font-semibold'}>{reviewDescription}</p>
      </div>
      <div>
        <StarsReview rating={rating} size={16} />
      </div>
    </section>
  );
};

export default Review;
