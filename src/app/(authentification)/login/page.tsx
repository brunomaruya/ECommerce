'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function Login() {
  const { handleSubmit } = useContext(AuthContext);

  const handleForm = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="font-semibold text-lg mb-6">Sign in</h1>
      <h2 className="text-base">Welcome back! Don&rsquo;t have an account?</h2>
      <Link href="/register" className="mb-2 text-primary-color text-base">
        Sign Up
      </Link>
      <form className="mt-[44px]" onSubmit={handleSubmit(handleForm)}>
        <Input
          placeholder="Username"
          className="mb-5"
          registerValue="username"
        />
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
          <Link href="/" className="text-primary-color">
            Forgot password?
          </Link>
        </div>
      </form>
      <div className="flex items-center">
        <div className="flex-1 h-1 bg-gray-400"></div>
        <div>OR</div>
        <div className="flex-1 h-1 bg-gray-400"></div>
      </div>
    </div>
  );
}
