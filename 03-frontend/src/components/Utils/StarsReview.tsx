import { FaStar } from 'react-icons/fa';
import { FaRegStar, FaStarHalf } from 'react-icons/fa6';

interface StarsReviewProps {
  rating: number;
  size: number;
}

const StarsReview: React.FC<StarsReviewProps> = ({ rating, size }) => {
  // TODO restart from this part.
  let rating = rating;
  let fullStars = 0;
  let halfStars = 0;
  let emptyStars = 0;

  if (rating !== undefined && rating > 0 && rating <= 5) {
    for (let i = 0; i <= 4; i++) {
      if (rating - 1 >= 0) {
        fullStars = fullStars + 1;
        rating = rating - 1;
      } else if (rating === 0.5) {
        halfStars = halfStars + 1;
        rating = rating - 0.5;
      } else if (rating === 0) {
        emptyStars = emptyStars + 1;
      } else {
        break;
      }
    }
  }

  return (
    <div className={'flex flex-row'}>
      {Array.from({ length: 3 }, (_, i) => (
        <FaStar size={30} color={'gold'} key={i} />
      ))}
      {Array.from({ length: 1 }, (_, i) => (
        <FaStarHalf size={30} color={'gold'} key={i} />
      ))}
      {Array.from({ length: 1 }, (_, i) => (
        <FaRegStar size={30} color={'gold'} key={i} />
      ))}
    </div>
  );
};

export default StarsReview;
