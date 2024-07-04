import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../ui/button.tsx';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button variant={'destructive'} onClick={handleLogout} size={'default'}>
      Log Out
    </Button>
  );
};
