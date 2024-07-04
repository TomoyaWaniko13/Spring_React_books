import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../ui/button.tsx';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
    });
  };

  return (
    <Button variant={'secondary'} onClick={handleLogin} size={'lg'}>
      Log In
    </Button>
  );
};
