import BookModel from '../../models/BookModel.ts';
import { Separator } from '../ui/separator.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card.tsx';
import { Button } from '../ui/button.tsx';
import { Link } from 'react-router-dom';

interface CheckoutAndReviewProps {
  book: BookModel | undefined;
}

const CheckoutAndReview: React.FC<CheckoutAndReviewProps> = ({ book }) => {
  return (
    <Card className={'w-full flex flex-col justify-center items-center p-2'}>
      <CardHeader>
        <CardDescription className={'text-sm'}>0/5 books checked out</CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className={'flex flex-col space-y-3'}>
        {book && book.copiesAvailable && book.copiesAvailable > 0 ? (
          <h4 className={'text-green-600 text-center'}>available</h4>
        ) : (
          <h4 className={'text-red-600 text-center'}>wait list</h4>
        )}
        <div className={'text-lg flex flex-row items-center justify-center space-x-10'}>
          <p>{book?.copies} copies</p>
          <p>{book?.copiesAvailable} available</p>
        </div>
        <Button>
          <Link to={'/'}>sign in</Link>
        </Button>
        <Separator />
      </CardContent>
      <CardFooter className={'flex flex-col space-y-10'}>
        <p>
          The number can change until placing order has been complete. <br />
          Sign in to be able to leave a review.
        </p>
      </CardFooter>
    </Card>
  );
};

export default CheckoutAndReview;
