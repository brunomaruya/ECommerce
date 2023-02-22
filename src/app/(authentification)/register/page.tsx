'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function Register() {
  const { handleSubmit } = useContext(AuthContext);

  const handleForm = (data: any) => {
    console.log(data);
  };

  return (
    <div className="pb-28">
      <h1 className="font-semibold text-lg mb-6">Sign up</h1>
      <h2 className="text-base">Already have an account?</h2>
      <Link href="/login" className="mb-2 text-primary-color text-base">
        Sign In
      </Link>
      <form className="mt-[44px]" onSubmit={handleSubmit(handleForm)}>
        <Input placeholder="Email" className="mb-5" registerValue="email" />
        <Input
          placeholder="Password"
          isPasswordType={true}
          registerValue="password"
        />

        <Button content="Login" primary={true} className="mt-7" />

        <div className="mt-[16px] flex justify-between">
          <div className="flex gap-3  items-center">
            <input
              type="checkbox"
              className="accent-primary-color w-5 h-5"
              id="remember"
            />{' '}
            <label htmlFor="remember" className="text-base">
              Remember me
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
