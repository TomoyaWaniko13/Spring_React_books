import { Button } from '../ui/button.tsx';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className={'w-full h-screen mx-auto text-center flex flex-col items-center justify-center space-y-9'}>
      <p className={'text-3xl sm:text-4xl md:text-9xl font-extrabold'}>find your next adventure</p>
      <h1 className={'text-3xl'}>where would you like to go next?</h1>
      <div className={'w-1/2'}>
        <Button variant='default' size={'lg'}>
          <Link to={'/search'}>explore top books</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
