'use client';

import { createContext, useContext, useState } from 'react';

interface UserContextProps {
  user: UserProps | null;
  setUserState: React.Dispatch<React.SetStateAction<UserProps | null>>;
}

interface UserProps {
  id: number;
  nome: string;
  userName: string;
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
