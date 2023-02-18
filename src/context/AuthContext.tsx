import { createContext, ReactNode } from 'react';
import { useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

type AuthContextType<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = {
  register: UseFormRegister<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
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
