'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import { AppleLogo, GoogleLogo } from 'phosphor-react';
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
      <div className="flex items-center gap-2 mt-6 mb-10">
        <div className="flex-1 h-[2px] bg-gray-400"></div>
        <div className="text-primary-color font-semibold">OR</div>
        <div className="flex-1 h-[2px] bg-gray-400"></div>
      </div>
      <div className="flex flex-col gap-4 pb-28">
        <button className="bg-[white] w-full flex gap-2 justify-center items-center py-4 border-gray-500 border-[1px] rounded-lg">
          <GoogleLogo className="text-primary-color font-extrabold" />
          Log In with Google
        </button>
        <button className="bg-[white] w-full flex gap-2 justify-center items-center py-4 border-gray-500 border-[1px] rounded-lg">
          <AppleLogo className="text-primary-color font-extrabold" />
          Log In with Apple
        </button>
      </div>
    </div>
  );
}
