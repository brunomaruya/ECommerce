import { createContext, ReactNode } from 'react';
import { useForm } from 'react-hook-form';

type AuthContextType = {
  register: any;
  handleSubmit: any;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { register, handleSubmit } = useForm();
  return (
    <AuthContext.Provider value={{ register, handleSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};
