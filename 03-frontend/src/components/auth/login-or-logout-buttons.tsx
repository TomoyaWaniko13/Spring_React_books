// src/components/auth/login-or-logout-buttons.tsx

import { useAuth0 } from '@auth0/auth0-react';
import { SignupButton } from './signup-button.tsx';
import { LoginButton } from './login-button.tsx';
import { LogoutButton } from './logout-button.tsx';

const LoginOrLogoutButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <div className={'flex flex-row whitespace-nowrap space-x-3 '}>
          <SignupButton />
          <LoginButton />
        </div>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default LoginOrLogoutButtons;
