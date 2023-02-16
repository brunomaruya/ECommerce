import React from 'react';

interface IButton {
  content: string;
  className?: string;
  primary?: boolean;
}

export default function Button({ content, className, primary }: IButton) {
  return (
    <button
      className={`${className} ${
        primary
          ? 'bg-primary-color text-[white] '
          : 'bg-[white] text-primary-color'
      }  py-3.5 rounded-xl font-semibold`}
    >
      {content}
    </button>
  );
}
