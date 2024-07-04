import { useAuth0 } from '@auth0/auth0-react';
import { SignupButton } from './signup-button.tsx';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button.tsx';

const SignupOrExploreButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && <SignupButton />}
      {isAuthenticated && (
        <Button size={'lg'} variant={'link'}>
          <Link to={'/search'}>Explore top books</Link>
        </Button>
      )}
    </div>
  );
};

export default SignupOrExploreButtons;
