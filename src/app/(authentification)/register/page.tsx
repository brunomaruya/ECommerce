'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { AuthContext } from '@/context/AuthContext';
import axios from 'axios';
import Link from 'next/link';
import React, { useContext } from 'react';

import handler from '@/pages/api/register';

type formTypes = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const { handleSubmit } = useContext(AuthContext);

  const onSubmit = async (formData: any) => {
    try {
      const name = formData.name;
      const email = formData.email;
      const password = formData.password;
      const { data } = await axios.post('/api/register', {
        name,
        email,
        password,
      });

      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="pb-28">
      <h1 className="font-semibold text-lg mb-6">Sign up</h1>
      <h2 className="text-base">Already have an account?</h2>
      <Link href="/login" className="mb-2 text-primary-color text-base">
        Sign In
      </Link>
      <form className="mt-[44px]" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Name" className="mb-5" registerValue="name" />
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
