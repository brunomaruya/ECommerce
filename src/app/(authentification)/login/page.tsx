'use client';
import Button from '@/components/Button';
import Link from 'next/link';
import { Eye, EyeSlash } from 'phosphor-react';
import React, { useState } from 'react';

export default function Login() {
  const inputDivStyles =
    'border-[1px] border-gray-500 bg-[white] py-[15px] px-[23px] rounded-lg';
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <h1 className="font-semibold text-lg mb-6">Sign in</h1>
      <h2 className="text-base">Welcome back! Don&rsquo;t have an account?</h2>
      <Link href="/register" className="mb-2 text-primary-color text-base">
        Sign Up
      </Link>
      <form className="mt-[44px]">
        <div className={`${inputDivStyles} mb-[19px]`}>
          <input
            type="text"
            placeholder="Username"
            className="p-0 bg-[transparent] w-full "
          />
        </div>
        <div className={`${inputDivStyles} flex items-center`}>
          <input
            type={isVisible ? 'text' : 'password'}
            placeholder="Password"
            className="p-0 bg-[transparent] w-full "
          />
          <div
            onClick={() => setIsVisible(!isVisible)}
            className="text-2xl text-primary-color"
          >
            {isVisible ? <EyeSlash /> : <Eye />}
          </div>
        </div>
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
    </div>
  );
}
