'use client';
import React, { ReactNode } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const active =
    ' text-primary-color after:content-[""] after:block after:w-[50%] after:h-[2px] after:absolute after:bottom-0 after:bg-primary-color';
  const activeSegment = useSelectedLayoutSegment();
  const baseStyles = 'flex-1 text-center w-full flex flex-col align-center ';

  return (
    <div>
      <div className="bg-primary-color h-[159px] w-full"></div>
      <div className="max-w-xs mx-auto">
        <div className="flex justify-around relative py-4">
          <div className="border-b-2 absolute bottom-0 w-full h-[2px] border-gray-300"></div>
          <div
            className={`${
              activeSegment === 'login' ? active : ''
            } ${baseStyles}  `}
          >
            Log in
          </div>
          <div
            className={`${
              activeSegment === 'register' ? active : ''
            } ${baseStyles}`}
          >
            Register
          </div>
        </div>
      </div>
      <main className="max-w-xs mx-auto">{children}</main>
    </div>
  );
}
