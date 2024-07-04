import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../ui/button.tsx';

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
    <Button onClick={handleSignUp} size={'lg'}>
      sign up
    </Button>
  );
};
