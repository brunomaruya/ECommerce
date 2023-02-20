'use client';

import { AuthContext } from '@/context/AuthContext';
import { Eye, EyeSlash } from 'phosphor-react';
import React, { useContext, useState } from 'react';

interface IInput {
  isPasswordType?: boolean;
  placeholder: string;
  className?: string;
  registerValue: string;
}

export default function Input({
  isPasswordType,
  placeholder,
  className,
  registerValue,
}: IInput) {
  const inputDivStyles =
    'border-[1px] border-gray-500 bg-[white] py-[15px] px-[23px] rounded-lg';
  const [isVisible, setIsVisible] = useState(false);

  const { register } = useContext(AuthContext);

  return (
    <div className={`${inputDivStyles} ${className} flex items-center`}>
      <input
        type={!isPasswordType ? 'text' : isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        className="p-0 bg-[transparent] w-full "
        {...register(registerValue)}
      />
      {isPasswordType && (
        <div
          onClick={() => setIsVisible(!isVisible)}
          className="text-2xl text-primary-color"
        >
          {isVisible ? <EyeSlash /> : <Eye />}
        </div>
      )}
    </div>
  );
}
