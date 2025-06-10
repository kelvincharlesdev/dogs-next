'use client';

import { logout } from '@/actions/logout';
import { validateToken } from '@/actions/validate-token';
import { createContext, useContext, useEffect, useState } from 'react';

interface UserContextProps {
  user: UserProps | null;
  setUserState: React.Dispatch<React.SetStateAction<UserProps | null>>;
}

interface UserProps {
  id: number;
  nome: string;
  username: string;
  email: string;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserProps | null;
}) => {
  const [userState, setUserState] = useState<UserProps | null>(user);

  useEffect(() => {
    const validate = async () => {
      const { ok } = await validateToken();
      if (!ok) {
        await logout();
      }
    };

    if (userState) {
      validate();
    }
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserContextProvider');
  }
  return context;
};
