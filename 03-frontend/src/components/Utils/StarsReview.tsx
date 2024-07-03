import { FaStar } from 'react-icons/fa';
import { IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

interface StarsReviewProps {
  rating: number;
  size: number;
}

const StarsReview: React.FC<StarsReviewProps> = ({ rating, size }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 === 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <article className={'flex flex-row'}>
      {Array.from({ length: fullStars }, (_, i) => (
        <FaStar size={30} color={'gold'} key={i} />
      ))}
      {Array.from({ length: halfStars }, (_, i) => (
        <IoIosStarHalf size={30} color={'gold'} key={i} />
      ))}
      {Array.from({ length: emptyStars }, (_, i) => (
        <IoIosStarOutline size={30} color={'gold'} key={i} />
      ))}
    </article>
  );
};

export default StarsReview;
